import request from "request";
import {Heimilisfang} from "./../interfaces/Heimilisfang";

export const getHeimilisfongFromService = async (): Promise<Heimilisfang[]> => {
    const heimilisfong = new Promise<Heimilisfang[]>((resolve, reject) => {
        request({url: "http://localhost:3000/heimilisfong", method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            resolve(JSON.parse(body))
        });
    });
    return heimilisfong;
}

export const getHeimilisfongByKennitalaFromService = async (kennitala: String): Promise<Heimilisfang[]> => {
    const heimilisfong = new Promise<Heimilisfang[]>((resolve, reject) => {
        request({url: `http://localhost:3000/heimilisfong/einstaklingur/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            resolve(JSON.parse(body))
        });
    });
    return heimilisfong;
}