using System;
using System.Runtime.Serialization;

[DataContract]
public class Faedingarorlofstekjur
{
    [DataMember]
    public String Kennitala { get; set; }

    [DataMember]
    public float personuafslattur { get; set; }

    [DataMember]
    public int Manadartekjur { get; set; }

    [DataMember]
    public int AdrarManadartekjur { get; set; }

    [DataMember]
    public float Vidbotarlifeyrissparnadur { get; set; }
    
}