import {Request, Response} from "express";
import * as soap from "soap";

const url = 'http://localhost:62991/Service.svc?wsdl';

/**
 * Loads list of einstaklingar
 * Additional query strings are from and to 
 * the timestamp format is 'yyyy-mm-dd hh:mm:ss'
 */
export const GetAaetladurFaedingardagur = async (request, response) => {
    soap.createClient(url, function(err, client) {
        client.GetAaetladurFaedingardagur({}, function(err, result) {
            response.send(result.GetAaetladurFaedingardagurResult.AaetladurFaedingardagur);
        });
    });
}

export const GetAaetladurFaedingardagurByKennitala = async (request, response) => {

    soap.createClient(url, function(err, client) {
        var args = {kennitala: request.params.kennitala};
        client.GetAaetladurFaedingardagurByKennitala(args, function(err, result) {
            response.send(result.GetAaetladurFaedingardagurByKennitalaResult);
        });
    });
}