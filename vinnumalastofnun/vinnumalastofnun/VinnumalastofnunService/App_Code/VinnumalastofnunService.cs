using System;
using System.Collections.Generic;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service" in code, svc and config file together.
public class Service : IVinnumalastofnunService
{
	public List<AaetladurFaedingardagur> GetAaetladurFaedingardagur(DateTime? from, DateTime? to)
	{
		var dao = new AaetladurFaedingardagurDAO();
		return dao.GetAaetladurFaedingardagur(from, to);
	}

	public AaetladurFaedingardagur GetAaetladurFaedingardagurByKennitala(string kennitala)
	{
		var dao = new AaetladurFaedingardagurDAO();
		return dao.GetAaetladurFaedingardagurByKennitala(kennitala);
	}

	public Faedingarorlofstekjur GetFaedingarorlofstekjurByKennitala(string kennitala)
	{
		var dao = new FaedingarorlofstekjurDAO();
		return dao.GetFaedingarorlofstekjurByKennitala(kennitala);
	}

	public List<Faedingarorlofstekjur> GetFaedingarorlofstekjur()
	{
		var dao = new FaedingarorlofstekjurDAO();
		return dao.GetFaedingarorlofstekjur();
	}
}
