import request from "request";
import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";
import {Faedingarorlofstekjur} from "./../interfaces/Faedingarorlofstekjur";

export const getAaetladurFaedingardagurByKennitala = async (kennitala: String): Promise<AaetladurFaedingardagur | null> => {
    const faedingardagur = new Promise<AaetladurFaedingardagur | null>((resolve, reject) => {
        request({url: `http://localhost:8000/aaetladurfaedingardagur/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            if(body && body != ""){
                resolve(JSON.parse(body));
            }
            else{
                resolve(null);
            }
        });
    });
    return faedingardagur;
}

export const getAaetladirFaedingardagar = async (eftir: String, fyrir: String): Promise<AaetladurFaedingardagur[]> => {
    const faedingardagar = new Promise<AaetladurFaedingardagur[]>((resolve, reject) => {
        request({url: `http://localhost:8000/aaetladurfaedingardagur`, qs:{from: eftir, to:fyrir}, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            if(body && body != ""){
                resolve(JSON.parse(body));
            }
            else{
                resolve([]);
            }
        });
    });
    return faedingardagar;
}

export const getFaedingarorlofstekjurByKennitala = async (kennitala: String): Promise<Faedingarorlofstekjur | null> => {
    const faedingarorlofstekjur = new Promise<Faedingarorlofstekjur | null>((resolve, reject) => {
        request({url: `http://localhost:8000/faedingarorlofstekjur/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            if(body && body != ""){
                resolve(JSON.parse(body));
            }
            else{
                resolve(null);
            }
        });
    });
    return faedingarorlofstekjur;
}

export const getFaedingarorlofstekjur = async (): Promise<Faedingarorlofstekjur[]> => {
    const faedingarorlofstekjur = new Promise<Faedingarorlofstekjur[]>((resolve, reject) => {
        request({url: `http://localhost:8000/faedingarorlofstekjur`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            if(body && body != ""){
                resolve(JSON.parse(body));
            }
            else{
                resolve([]);
            }
        });
    });
    return faedingarorlofstekjur;
}