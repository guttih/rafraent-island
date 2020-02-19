import request from "request";
import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";

export const getAaetladurFaedingardagurByKennitala = async (kennitala: String): Promise<AaetladurFaedingardagur | null> => {
    const faedingardagur = new Promise<AaetladurFaedingardagur | null>((resolve, reject) => {
        request({url: `http://localhost:8000/aaetladurfaedingardagur/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            if(body && body != ""){
                resolve(JSON.parse(body))
            }
            else{
                resolve(null);
            }
        });
    });
    return faedingardagur;
}

export const getAaetladirFaedingardagar = async (): Promise<AaetladurFaedingardagur[]> => {
    const faedingardagar = new Promise<AaetladurFaedingardagur[]>((resolve, reject) => {
        request({url: "http://localhost:8000/aaetladurfaedingardagur", method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            resolve(JSON.parse(body))
        });
    });
    return faedingardagar;
}