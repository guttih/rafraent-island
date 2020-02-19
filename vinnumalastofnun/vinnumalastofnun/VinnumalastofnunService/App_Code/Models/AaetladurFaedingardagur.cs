using System;
using System.Runtime.Serialization;

[DataContract]
public class AaetladurFaedingardagur
{
    [DataMember(Name ="kennitala")]
    public String Kennitala { get; set; }
    [DataMember(Name = "dagsetning")]
    public DateTime Dagsetning { get; set; }
}