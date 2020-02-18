using Npgsql;
using System;

/// <summary>
/// Summary description for FaedingarorlofstekjurMapper
/// </summary>

public class FaedingarorlofstekjurMapper
{
    enum ColumnName { kennitala, personuafslattur, manadartekjur, adrar_manadartekjur, vidbotarlifeyrissparnadur, count }
    int[] columnIndex = new int[(int)ColumnName.count];

    public FaedingarorlofstekjurMapper(NpgsqlDataReader reader)
    {
        var schema = reader.GetColumnSchema();
        for (int i = 0; i < (int)ColumnName.count; i++)
        {
            switch (schema[i].ColumnName)
            {
                case "kennitala"                : columnIndex[(int)ColumnName.kennitala] = i;                 break;
                case "personuafslattur"         : columnIndex[(int)ColumnName.personuafslattur] = i;          break;
                case "manadartekjur"            : columnIndex[(int)ColumnName.manadartekjur] = i;             break;
                case "adrar_manadartekjur"      : columnIndex[(int)ColumnName.adrar_manadartekjur] = i;       break;
                case "vidbotarlifeyrissparnadur": columnIndex[(int)ColumnName.vidbotarlifeyrissparnadur] = i; break;
                default: throw new Exception("Column schema unexpected!");
            }
        }

    }

    public Faedingarorlofstekjur Map(NpgsqlDataReader reader)
    {
        return new Faedingarorlofstekjur
        {
            Kennitala                 =             reader[columnIndex[(int)ColumnName.kennitala]].ToString(),
            Manadartekjur             = Int32.Parse(reader[columnIndex[(int)ColumnName.manadartekjur]].ToString()),
            AdrarManadartekjur        = Int32.Parse(reader[columnIndex[(int)ColumnName.adrar_manadartekjur]].ToString()),
            personuafslattur          = float.Parse(reader[columnIndex[(int)ColumnName.personuafslattur]].ToString()),
            Vidbotarlifeyrissparnadur = float.Parse(reader[columnIndex[(int)ColumnName.vidbotarlifeyrissparnadur]].ToString())
        };
        
    }
}