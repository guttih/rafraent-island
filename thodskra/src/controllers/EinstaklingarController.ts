import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {Einstaklingar} from "../entity/Einstaklingar";
//import Power from "../entity/Power";

class EinstaklingarController {

    constructor() {}


    public list(req: Request, res: Response) {
        connection
            .then(async connection => {
                const result: Einstaklingar[] = await connection.manager.find(Einstaklingar);
                res.json(result);
                console.log("ok");
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
    public add(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestItem      = req.body;
                let requestForeldrar = requestItem.foreldrar;
                let requestBorn      = requestItem.born;
                //let requestPower = requestEinstaklingur.power;
 
                let item = new Einstaklingar();
                item.kennitala      = requestItem.kennitala;
                item.nafn           = requestItem.nafn;
                item.faedingardagur = requestItem.faedingardagur;
                item.maki           = requestItem.maki;
                /*item.born           = [];
                item.foreldrar      = [];
                if (requestForeldrar!== undefined){
                    requestForeldrar.forEach(requestItem => {
                        let subItem: Einstaklingar = new Einstaklingar();
                        subItem.kennitala = requestItem.kennitala;
                        item.foreldrar.push(subItem);
                    });
                }
                if (requestBorn !== undefined ) {
                    requestBorn.forEach(requestItem => {
                        let subItem: Einstaklingar = new Einstaklingar();
                        subItem.kennitala = requestItem.kennitala;
                        item.born.push(subItem);
                    });
                }
*/
                await connection.manager.save(item);
                res.json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public update(req: Request, res: Response) {
        connection
            .then(async connection => {

                let item  = await connection.manager.findOne(Einstaklingar, req.params.kennitala);
                let requestItem     = req.body;
                item.nafn           = requestItem.nafn;
                item.faedingardagur = requestItem.faedingardagur;
                item.maki           = requestItem.maki;

                await connection.manager.save(item);
                res.json({message: "Successfully Updated."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public getByKennitala(req: Request, res: Response) {
        connection
            .then(async connection => {
                let item  = await connection.manager.findOne(Einstaklingar, req.params.kennitala);
                res.json(item)
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public delete(req: Request, res: Response) {
        connection
            .then(async connection => {
                let item  = await connection.manager.findOne(Einstaklingar, req.params.kennitala);

                //hér þarf að eyða úr tengitöflu
                // delete our super-hero
                await connection.manager.remove(item);

                res.json({message: "Successfully Removed."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
}

export {EinstaklingarController}