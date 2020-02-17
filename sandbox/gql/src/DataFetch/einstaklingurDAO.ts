import request from "request";

export const getEinstaklingurByKennitalaFromService = async (kennitala: String): Promise<any> => {
    const einstaklingur = new Promise<any>((resolve, reject) => {
      request({url: `http://localhost:3000/einstaklingar/${kennitala}`, method: "GET"}, (error: any, response: any, body: string) => {
        if (error) {
          console.error(error);
          reject(error);
        }
  
        resolve(JSON.parse(body))
      });
    });
    return einstaklingur;
  }