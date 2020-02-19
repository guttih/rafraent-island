# nodesoap
Node app sem kallar í föll frá keyrandi soap þjónustu

## install and run
`npm i && node .`
### Byggt á pakka
Pakinn sem gerir þetta kleyft er staðsettur hér `https://github.com/vpulim/node-soap`  og til að installa hann í nýtt project gerir þú `npm install soap --save`


### soap example 1
```
var soap = require('soap');
var url = 'http://localhost:62991/Service.svc?wsdl';
var args = {kennitala: '161210097240'};
soap.createClient(url, function(err, client) {

    client.GetAaetladurFaedingardagur(args, function(err, result) {
        //console.log(result);
        var fa = result.GetAaetladurFaedingardagurResult.AaetladurFaedingardagur;
        for(var i = 0; i<fa.length; i++){
            console.log(result.GetAaetladurFaedingardagurResult.AaetladurFaedingardagur[i]);   
         }
        });
});
```

### soap example 2
```
soap.createClient(url, function(err, client) {
    var args = {kennitala: '161210097240'};
    client.GetAaetladurFaedingardagurByKennitala(args, function(err, result) {
        console.log(result);
        var fa = result.GetAaetladurFaedingardagurResult.AaetladurFaedingardagur;
        for(var i = 0; i<fa.length; i++){
            console.log(result.GetAaetladurFaedingardagurResult.AaetladurFaedingardagur[i]);   
         }
    });

});
```