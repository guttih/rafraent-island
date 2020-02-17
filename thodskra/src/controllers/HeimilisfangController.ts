import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";
import {errorReport} from  "../libs/LibContollers";
import { connection } from "../connection/Connection";

/**
 * Loads all posts from the database.
 */
export const getHeimilisfong = async (request: Request, response: Response) => {
    await connection;
    const repository = getManager().getRepository(Heimilisfang);

    const items = await repository.find();

    response.send(items);
        
};

export async function getHeimilisfangById(request: Request, response: Response) {

    try {
        await connection
        const repository = getManager().getRepository(Heimilisfang);
        const item = await repository.findOne(request.params.id);

        if (!item) {
            response.status(404);
            response.end();
            return;
        }

        // return loaded item
        response.send(item);

    } catch(error){
        errorReport(response, error);
    }; 
};

export async function getHeimilisfangByKennitala(request: Request, response: Response) {

    console.log('einstaklingurGetBornByKennitala');
    try {
        await connection;
        const items = await getManager().query(` SELECT h.id, h.postfang eh FROM heimilisfang h
                                                 JOIN einstaklingur_heimilisfang eh ON eh.heimilisfang_id = h.id
                                                 WHERE eh.kennitala = $1`,
                                                [request.params.kennitala]);
        response.json(items);
        return;
    } catch(error){
        errorReport(response, error);
    }; 
};

export async function saveHeimilisfang(request: Request, response: Response) {

    try{
        await connection
        const repository = getManager().getRepository(Heimilisfang);

        const newItem = repository.create(request.body);
        console.log("newItem");console.log(newItem);

        await repository.save(newItem).catch(error => {
            console.error("Error ", error);
            response.status(422).json(error);
        });

        response.send(newItem);
    } catch(error){
        await errorReport(response, error);
    }; 
}

