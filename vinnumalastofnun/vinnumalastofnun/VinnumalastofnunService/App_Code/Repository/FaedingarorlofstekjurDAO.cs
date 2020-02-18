using Npgsql;
using System;
using System.Collections.Generic;

/// <summary>
/// Summary description for FaedingarorlofstekjurDAO
/// </summary>
public class FaedingarorlofstekjurDAO
{
    private const String connectionString =  "Server=127.0.0.1;User Id=postgres; Password=password;Database=vinnumalastofnun;";
    private NpgsqlConnection connection;

    public FaedingarorlofstekjurDAO()
    {
        connection = new NpgsqlConnection(connectionString);
    }

    public Faedingarorlofstekjur GetFaedingarorlofstekjurByKennitala(string kennitala)
    {
        var query = @"SELECT kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur 
                      FROM public.faedingarorlofstekjur
                      WHERE kennitala = @kennitala";
        connection.Open();
        
        Faedingarorlofstekjur ret = null;
        using (var cmd = new NpgsqlCommand(query, connection))
        {
            cmd.Parameters.AddWithValue("kennitala", kennitala);
            cmd.ExecuteNonQuery();
            NpgsqlDataReader reader = cmd.ExecuteReader();
            
            if (reader.Read())
            {
                ret = (new FaedingarorlofstekjurMapper(reader)).Map(reader);
            }
        }
        
        connection.Close();

        return ret;
    }

    public  List<Faedingarorlofstekjur> GetFaedingarorlofstekjur()
    {
        var query = @"SELECT kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur 
                      FROM public.faedingarorlofstekjur";

        connection.Open();

        

        NpgsqlCommand command = new NpgsqlCommand(query, connection);

        var list = new List<Faedingarorlofstekjur>();

        NpgsqlDataReader reader = command.ExecuteReader();

        var mapper = new FaedingarorlofstekjurMapper(reader);

        while (reader.Read())
        {
            list.Add(mapper.Map(reader));
        }

        connection.Close();

        return list;
    }

}