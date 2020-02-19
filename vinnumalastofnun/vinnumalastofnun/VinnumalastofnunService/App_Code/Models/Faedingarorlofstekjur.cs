using System;
using System.Runtime.Serialization;

[DataContract]
public class Faedingarorlofstekjur
{
    [DataMember(Name ="kennitala")]
    public String Kennitala { get; set; }

    [DataMember(Name = "personuafslattur")]
    public float Personuafslattur { get; set; }

    [DataMember(Name = "manadartekjur")]
    public int Manadartekjur { get; set; }

    [DataMember(Name = "adrarManadartekjur")]
    public int AdrarManadartekjur { get; set; }

    [DataMember(Name = "vidbotarlifeyrissparnadur")]
    public float Vidbotarlifeyrissparnadur { get; set; }
    
}