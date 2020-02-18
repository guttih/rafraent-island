using Npgsql;
using System;

/// <summary>
/// Summary description for AaetladurFaedingardagurMapper
/// </summary>
public class AaetladurFaedingardagurMapper
{
    enum ColumnName { kennitala, dagsetning, count }
    int[] columnIndex = new int[(int)ColumnName.count];

    public AaetladurFaedingardagurMapper(NpgsqlDataReader reader)
    {
        var schema = reader.GetColumnSchema();
        for (int i = 0; i < (int)ColumnName.count; i++)
        {
            switch (schema[i].ColumnName)
            {
                case "kennitala": columnIndex[(int)ColumnName.kennitala] = i; break;
                case "dagsetning": columnIndex[(int)ColumnName.dagsetning] = i; break;
                default: throw new Exception("Column schema unexpected!");
            }
        }
    }

    public AaetladurFaedingardagur Map(NpgsqlDataReader reader)
    {
        return new AaetladurFaedingardagur
        {
            Kennitala =                 reader[columnIndex[(int)ColumnName.kennitala ]].ToString(),
            Dagsetning = DateTime.Parse(reader[columnIndex[(int)ColumnName.dagsetning]].ToString())
        };

    }
}