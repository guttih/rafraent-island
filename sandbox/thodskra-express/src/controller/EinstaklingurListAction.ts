import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads all posts from the database.
 */
export async function einstaklingurListAction(request: Request, response: Response) {

    const repository = getManager().getRepository(Einstaklingur);

    const items = await repository.find();
    //const items = await repository.find({relations: ["born", "logheimili"]});

    response.send(items);
}