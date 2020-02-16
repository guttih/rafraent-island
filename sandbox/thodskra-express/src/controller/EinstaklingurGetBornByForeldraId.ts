import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetBornByForeldraId(request: Request, response: Response) {

    const repository = getManager().getRepository(Einstaklingur);

    const items = await repository.find({where:{kennitala: request.params.kennitala},relations: ["foreldri", "logheimili"]});
    if (!items) {
        response.status(404).json({"message":"Not found!"});
        response.end();
        return;
    } 

    // return loaded item
    response.send(items);
}