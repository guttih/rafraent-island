using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService" in both code and config file together.
[ServiceContract]
public interface IVinnumalastofnunService
{

	[OperationContract]
	Faedingarorlofstekjur GetFaedingarorlofstekjurByKennitala(String kennitala);

	[OperationContract]
	List<Faedingarorlofstekjur> GetFaedingarorlofstekjur();

	[OperationContract]
	AaetladurFaedingardagur GetAaetladurFaedingardagurByKennitala(String kennitala);

	[OperationContract]
	List<AaetladurFaedingardagur> GetAaetladurFaedingardagur(DateTime? from, DateTime? to);

}


