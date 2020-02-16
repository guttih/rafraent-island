import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";

/**
 * Loads all posts from the database.
 */
export async function heimilisfangListAction(request: Request, response: Response) {

    
    const repository = getManager().getRepository(Heimilisfang);

    const items = await repository.find();

    response.send(items);
}