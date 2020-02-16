import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";

/**
 * Saves given post.
 */
export async function heimilisfangSaveAction(request: Request, response: Response) {

        const repository = getManager().getRepository(Heimilisfang);

        const newItem = repository.create(request.body);
        console.log("newItem");console.log(newItem);

        await repository.save(newItem).catch(error => {
            console.error("Error ", error);
            response.status(422).json(error);
        });

        response.send(newItem);
}