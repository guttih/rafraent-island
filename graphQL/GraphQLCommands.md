# commands

## command 1
```
{
  getEinstaklingar(faeddurEftir: "2019-07-01") {
    nafn
    kennitala
    logheimili {
      postfang
    }
    faedingardagur
    foreldrar {
      nafn
      kennitala
      logheimili {
        postfang
      }
      faedingardagur
    }
  }
}

```
## command 2
```
{
  getVMSInfo(fyrir: "2020-06-01") {
    kennitala
    aaetl_faedingardagur
    manadartekjur
    personuafslattur
  }
}
```
## command 3
```
{
  getForeldrar(aaetlDagurFra: "2020-05-01", aaetlDagurTil: "2020-06-01") {
    nafn
    born {
      nafn
    }
    faedingarorlofstekjur {
      manadartekjur
    }
    aaetladur_faedingardagur {
      dagsetning
    }
  }
}

```