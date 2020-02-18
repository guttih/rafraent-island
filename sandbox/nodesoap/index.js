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