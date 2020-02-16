import {Request, Response} from "express";
import {getManager, Any} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Saves given post.
 */
export async function einstaklingurSaveAction(request: Request, response: Response) {

    console.log("hér")
    const repository = getManager().getRepository(Einstaklingur);

    const newItem = repository.create(request.body);

    console.log("newItem");console.log(newItem);

    await repository.save(newItem)
    .then((data)=>{
        console.log("saved data");console.log(data);
    })
    .catch(error => {
        console.error("Error ", error);
        response.status(422).json(error); 
    });

    response.send(newItem);
}