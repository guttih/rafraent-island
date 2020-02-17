import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetBornByForeldraId(request: Request, response: Response) {

    /*const repository = getManager().getRepository(Einstaklingur);

    const items = await repository.find({where:{kennitala: request.params.kennitala},relations: ["foreldri", "logheimili"]});
    if (!items) {
        response.status(404).json({"message":"Not found!"});
        response.end();
        return;
    } 

    // return loaded item
    response.send(items);*/

    try {
        const items = await getManager().query( ' SELECT e.kennitala, e.nafn, e.faedingardagur, e.maki_kennitala'
                                               +' FROM foreldri_barn fb'
                                               +' LEFT JOIN einstaklingur e ON e.kennitala = fb.barn_kennitala' 
                                               +' WHERE foreldri_kennitala = $1',
                                                [request.params.kennitala]);
        response.json(items);
        return;
    } catch(error){
        console.error("Error ", error);
        response.status(500).json({message:"There was an error!"});
    }; 
}