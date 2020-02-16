import request from "request";

export const getBooksFromService = async (): Promise<any[]> => {
  const books = new Promise<any[]>((resolve, reject) => {
    request({url: "http://localhost:4000/books", method: "GET"}, (error: any, response: any, body: string) => {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(JSON.parse(body))
    });
  });
  return books;
}