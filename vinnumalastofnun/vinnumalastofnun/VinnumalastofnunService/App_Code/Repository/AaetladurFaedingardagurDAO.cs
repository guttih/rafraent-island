using Npgsql;
using System;
using System.Collections.Generic;

/// <summary>
/// Summary description for AaetladurFaedingardagurDAO
/// </summary>
public class AaetladurFaedingardagurDAO
{
    private const String connectionString = "Server=127.0.0.1;User Id=postgres; Password=password;Database=vinnumalastofnun;";
    private NpgsqlConnection connection;

    public AaetladurFaedingardagurDAO()
    {
        connection = new NpgsqlConnection(connectionString);
    }

    public AaetladurFaedingardagur GetAaetladurFaedingardagurByKennitala(string kennitala)
    {
        var query = @"SELECT kennitala, dagsetning
	                  FROM public.aaetladur_faedingardagur
	                  where kennitala = @kennitala";
        connection.Open();

        AaetladurFaedingardagur ret = null;
        using (var cmd = new NpgsqlCommand(query, connection))
        {
            cmd.Parameters.AddWithValue("kennitala", kennitala);
            cmd.ExecuteNonQuery();
            NpgsqlDataReader reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                ret = (new AaetladurFaedingardagurMapper(reader)).Map(reader);
            }
        }

        connection.Close();

        return ret;
    }

    public List<AaetladurFaedingardagur> GetAaetladurFaedingardagur(DateTime? from, DateTime? to)
    {
        var whereString = from != null || to != null ? "WHERE" : "";
        var andString   = from != null && to != null ? "AND"   : "";
        var fromString  = from != null ? "dagsetning >= @from"   : "";
        var toString    =   to != null ? "dagsetning <= @to"     : "";

        var query = string.Format(  "SELECT kennitala, dagsetning FROM public.aaetladur_faedingardagur {0} {1} {2} {3}",
                                    whereString, fromString, andString, toString);

        //todo: bæta vil virkni fyrir from og to
        connection.Open();

        NpgsqlCommand command = new NpgsqlCommand(query, connection);
        if (from != null)
            command.Parameters.AddWithValue("from", from);
        if (to != null)
            command.Parameters.AddWithValue("to", to);


        var list = new List<AaetladurFaedingardagur>();;

        NpgsqlDataReader reader = command.ExecuteReader();

        var mapper = new AaetladurFaedingardagurMapper(reader);

        while (reader.Read())
        {
            list.Add(mapper.Map(reader));
        }

        connection.Close();

        return list;
    }
}