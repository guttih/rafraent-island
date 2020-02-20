import request from "request";
import {Einstaklingur} from "../interfaces/Einstaklingur";

export const getEinstaklingurByKennitalaFromService = async (kennitala: String): Promise<Einstaklingur | null> => {
    const einstaklingur = new Promise<Einstaklingur | null>((resolve, reject) => {
        request({url: `http://localhost:3000/einstaklingar/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
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
    return einstaklingur;
}

export const getEinstaklingarFromService = async (): Promise<Einstaklingur[]> => {
    const einstaklingar = new Promise<Einstaklingur[]>((resolve, reject) => {
        request({url: "http://localhost:3000/einstaklingar", method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
                console.error(error);
                reject(error);
            }

            resolve(JSON.parse(body))
        });
    });
    return einstaklingar;
}

export const getBornByKennitalaFromService = async (kennitala: String): Promise<Einstaklingur[]> => {
    const born = new Promise<Einstaklingur[]>((resolve, reject) => {
        request({url: `http://localhost:3000/einstaklingar/born/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
            console.error(error);
            reject(error);
            }
    
            resolve(JSON.parse(body))
        });
    });
    return born;
  }

  export const getForeldrarByKennitalaFromService = async (kennitala: String): Promise<Einstaklingur[]> => {
    const foreldrar = new Promise<Einstaklingur[]>((resolve, reject) => {
        request({url: `http://localhost:3000/einstaklingar/foreldrar/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
            console.error(error);
            reject(error);
            }
    
            resolve(JSON.parse(body))
        });
    });
    return foreldrar;
  }

  export const getForeldrarFromService = async (): Promise<Einstaklingur[]> => {
    const foreldrar = new Promise<Einstaklingur[]>((resolve, reject) => {
        request({url: `http://localhost:3000/foreldrar`, method: "GET"}, (error: any, response: any, body: string) => {
            if (error) {
            console.error(error);
            reject(error);
            }
    
            resolve(JSON.parse(body))
        });
    });
    return foreldrar;
  }