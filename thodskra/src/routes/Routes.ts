import {Request, Response} from "express";
import {
    einstaklingarGet,
    einstaklingurGetByKennitala,
    einstaklingurGetForeldrarByKennitala,
    einstaklingurGetBornByKennitala,
    einstaklingurGetByKennitalaDetailed,
    einstaklingurSave,
    } from "../controllers/EinstaklingurController";
import {
    getHeimilisfong, 
    getHeimilisfangByKennitala, 
    getHeimilisfangById} from "../controllers/HeimilisfangController";
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

//        app.route('/bornforeldrar').get(this.bornforeldrarController.list);
        app.route('/einstaklingar')
            .get(einstaklingarGet)
            .post(einstaklingurSave);
        app.route('/einstaklingar/nanar/:kennitala')
            .get(einstaklingurGetByKennitalaDetailed);
        app.route('/einstaklingar/:kennitala')
            .get(einstaklingurGetByKennitala);/*
            .put(this.einstaklingarController.update)
            .delete(this.einstaklingarController.delete);
        app.route('/einstaklingar/born/:kennitala')
            .get(this.einstaklingarController.getByBornKennitala);
        */  
       app.route('/einstaklingar/born/:kennitala')
            .get(einstaklingurGetBornByKennitala);
       app.route('/einstaklingar/foreldrar/:kennitala')
            .get(einstaklingurGetForeldrarByKennitala);/*
        app.route('/heimilisfong')
            .get(getHeimilisfong);
            /*.post(this.heimilisfongController.add);*/
        app.route('/heimilisfong/:id')
            .get(getHeimilisfangById);
            /*.put(this.heimilisfongController.update)
            .delete(this.heimilisfongController.delete);*/
        app.route('/heimilisfong/einstaklingur/:kennitala')
            .get(getHeimilisfangByKennitala);
            
    }
    
}

export {Routes};