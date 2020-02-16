import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetByIdAction(request: Request, response: Response) {

    const repository = getManager().getRepository(Einstaklingur);

    const item = await repository.findOne({where:{kennitala: request.params.kennitala},relations: ["born", "logheimili"]});

    if (!item) {
        response.status(404).json({"message":"Not found!"});
        response.end();
        return;
    } else {
        if (item.maki){
            const felagi = await repository.findOne({where:{kennitala: item.maki},relations: ["born", "logheimili"]});
            if (felagi) {
                item.makiItem = felagi;
            }
        }
    }

    // return loaded item
    response.send(item);
}