import request from "request";

export const getEinstaklingarFromService = async (): Promise<any[]> => {
  const einstaklingar = new Promise<any[]>((resolve, reject) => {
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