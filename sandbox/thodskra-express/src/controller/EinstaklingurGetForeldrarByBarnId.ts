import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";

/**
 * Loads item by a given id.
 */
export async function einstaklingurGetForeldrarByBarnId(request: Request, response: Response) {

    const repository = getManager().getRepository(Einstaklingur);
    const items = await repository.find({relations:["born"]});
    //todo: hvernig leitum við í relations born.kennitala
    
    let foreldrar = [];
    if (!items) {
        response.status(404).json({"message":"Not found!"});
        response.end();
        return;
    } else {
        let parents = [];
        items.forEach(einst => {
            if (einst.born !== undefined && einst.born.length > 0 ) {
                einst.born.forEach(barn => {
                    if (barn.kennitala === request.params.kennitala) {
                        parents.push(einst);
                    }
                });
            }
        });
        parents.forEach(element => {
            foreldrar.push({
                kennitala      : element.kennitala,
                nafn           : element.nafn,
                faedingardagur : element.faedingardagur,
                maki           : element.maki,

            });
        });
    }
    // return loaded item
    response.send(foreldrar);
}