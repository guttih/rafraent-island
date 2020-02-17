import {Request, Response} from "express";
import {getManager, createQueryBuilder, EntityManager, Entity} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetForeldrarByBarnId(request: Request, response: Response) {

    try {
        const items = await getManager().query( ' SELECT e.kennitala, e.nafn, e.faedingardagur, e.maki_kennitala'
                                               +' FROM foreldri_barn fb'
                                               +' LEFT JOIN einstaklingur e ON e.kennitala = fb.foreldri_kennitala' 
                                               +' WHERE barn_kennitala = $1',
                                                [request.params.kennitala]);
        
        response.json(items);
        return;
    } catch(error){
        console.error("Error ", error);
        response.status(500).json({message:"There was an error!"});
    }; 
}