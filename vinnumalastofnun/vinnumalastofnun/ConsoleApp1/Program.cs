using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

            // thodskra.einstaklingur
            //var connString    = "Server=127.0.0.1;User Id=postgres; Password=password;Database=postgres;";
            //var query         = " SELECT kennitala, nafn, faedingardagur, maki_kennitala FROM einstaklingur;";

            var connString      = "Server=127.0.0.1;User Id=postgres; Password=password;Database=vinnumalastofnun;";
            //var query         = "SELECT kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur FROM public.faedingarorlofstekjur;";
            var query           = "SELECT kennitala, dagsetning FROM public.aaetladur_faedingardagur;";
            var conn = new NpgsqlConnection(connString);
            conn.Open();


            NpgsqlCommand command = new NpgsqlCommand(query, conn);

            // Execute the query and obtain a result set
            NpgsqlDataReader dr = command.ExecuteReader();
            var schema = dr.GetColumnSchema();
            for (int i = 0; i < schema.Count; i++)
            {
                Console.Write($"{ schema[i].ColumnName}\t");
            }
            Console.WriteLine();
            while (dr.Read()) 
            { 
                for (int i = 0; i < dr.FieldCount; i++)
                {
                    Console.Write($"{ dr[i]}\t");
                }
                Console.WriteLine();
            }
            conn.Close();
            Console.ReadKey();
        }



        // Insert some data
        /*using (var cmd = new NpgsqlCommand("INSERT INTO data (some_field) VALUES (@p)", conn))
        {
            cmd.Parameters.AddWithValue("p", "Hello world");
            cmd.ExecuteNonQueryAsync();
        }

        // Retrieve all rows
        using (var cmd = new NpgsqlCommand("SELECT * FROM data", conn))
        using (var reader = cmd.ExecuteReader())
            while (reader.Read())
                Console.WriteLine(reader.GetString(0));
        */
    }
}
