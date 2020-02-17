import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";
import {errorReportGeneral} from  "../libs/LibContollers";
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
        console.log('....................................');
        errorReportGeneral(response, error);
        console.log('....................................');
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
        await errorReportGeneral(response, error);
    }; 
}

