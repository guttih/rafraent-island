import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import {Heimilisfong} from "../entity/Heimilisfong";

//see https://typeorm.io/#/entities/column-types-for-postgres
class HeimilisfongController {

    constructor() {}


    public list(req: Request, res: Response) {
        connection
            .then(async connection => {
                const result: Heimilisfong[] = await connection.manager.find(Heimilisfong);
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
                let item = new Heimilisfong();
                item.id      = requestItem.id;
                item.postfang           = requestItem.postfang;
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

                let item  = await connection.manager.findOne(Heimilisfong, req.params.id);

                let requestItem = req.body;
                item.postfang = requestItem.postfang;
                await connection.manager.save(item);
                res.json({message: "Successfully Updated."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public getById(req: Request, res: Response) {
        connection
            .then(async connection => {
                let item  = await connection.manager.findOne(Heimilisfong, req.params.id);
                res.json(item);
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public delete(req: Request, res: Response) {
        connection
            .then(async connection => {
                let item  = await connection.manager.findOne(Heimilisfong, req.params.id);

                // todo: delete all from logheimili
                await connection.manager.remove(item);

                res.json({message: "Successfully Removed."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }
}

export {HeimilisfongController}