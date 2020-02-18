using System;
using System.Runtime.Serialization;

[DataContract]
public class AaetladurFaedingardagur
{
    [DataMember]
    public String Kennitala { get; set; }
    [DataMember]
    public DateTime Dagsetning { get; set; }
}