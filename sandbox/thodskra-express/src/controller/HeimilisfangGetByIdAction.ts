import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";

/**
 * Loads item by a given id.
 */
export async function heimilisfangGetByIdAction(request: Request, response: Response) {

    const repository = getManager().getRepository(Heimilisfang);
    const item = await repository.findOne(request.params.id);

    if (!item) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded item
    response.send(item);
}
