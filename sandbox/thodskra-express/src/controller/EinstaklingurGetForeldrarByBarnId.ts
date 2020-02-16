import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetForeldrarByBarnId(request: Request, response: Response) {

    const repository = getManager().getRepository(Einstaklingur);
    //const items = await (await repository.findOne({kennitala:request.params.kennitala});
   
    response.status(501).json({test:"Not implemented yet!"});
}