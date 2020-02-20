import {Request, Response} from "express";
import {
    einstaklingarGet,
    einstaklingurGetByKennitala,
    einstaklingurGetForeldrarByKennitala,
    einstaklingurGetBornByKennitala,
    einstaklingurGetByKennitalaDetailed,
    einstaklingurSave,
    einstaklingurDeleteByKennitala,
    einstaklingurGetForeldrar,
    einstaklingurGetBorn,
    } from "../controllers/EinstaklingurController";
import {
    HeimilisfongGet, 
    HeimilisfangGetByKennitala, 
    HeimilisfangGetById,
    HeimilisfangSave,
    HeimilisfangDeleteById} from "../controllers/HeimilisfangController";
import {MakePage} from "../libs/InfoPage"

class Routes {

    constructor() {

    }

    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                
                response.status(200)
                    .send(MakePage('Þjóðskrá', 'Þjónusta sem gefur aðgang að upplýsingum einstaklinga, tengsl þeirra og heimilisfang'));
                    console.log('Root OK')
            });

        app.route('/einstaklingar')
            .get(einstaklingarGet)
            .post(einstaklingurSave);
        app.route('/einstaklingar/nanar/:kennitala')
            .get(einstaklingurGetByKennitalaDetailed);
        app.route('/einstaklingar/:kennitala')
            .get(einstaklingurGetByKennitala)
            .delete(einstaklingurDeleteByKennitala);
       app.route('/einstaklingar/born/:kennitala')
            .get(einstaklingurGetBornByKennitala);
       app.route('/einstaklingar/foreldrar/:kennitala')
            .get(einstaklingurGetForeldrarByKennitala);
        app.route('/heimilisfong')
            .get(HeimilisfongGet)
            .post(HeimilisfangSave);
        app.route('/heimilisfong/:id')
            .get(HeimilisfangGetById)
            .delete(HeimilisfangDeleteById);
        app.route('/heimilisfong/einstaklingur/:kennitala')
            .get(HeimilisfangGetByKennitala);
        app.route('/born')
            .get(einstaklingurGetBorn);
        app.route('/foreldrar')
            .get(einstaklingurGetForeldrar)
            
    }
    
}

export {Routes};