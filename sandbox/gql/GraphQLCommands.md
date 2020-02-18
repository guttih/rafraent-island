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