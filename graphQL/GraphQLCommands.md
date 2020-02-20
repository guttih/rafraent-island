# commands

## command 1
```
  getEinstaklingur(kennitala: "162605784649") {
    nafn
    kennitala
    maki {
      kennitala
      nafn
    }
  }
```
## command 2
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
## command 3
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
## command 4
```
{
  getForeldrar(aaetlDagurFra: "2020-05-01", aaetlDagurTil: "2020-06-01") {
    kennitala
    nafn
    aaetladur_faedingardagur {
      dagsetning
    }
  }
}
```