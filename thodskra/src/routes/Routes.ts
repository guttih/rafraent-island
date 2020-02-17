import {Request, Response} from "express";
import {getEinstaklingar} from "../controllers/EinstaklingurController";
import {getHeimilisfong, getHeimilisfangById} from "../controllers/HeimilisfangController";

class Routes {

    constructor() {

    }

    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
                    console.log('Root OK')
            });

//        app.route('/bornforeldrar').get(this.bornforeldrarController.list);
        app.route('/einstaklingar')
            .get(getEinstaklingar);
        /*  .post(this.einstaklingarController.add);
        app.route('/einstaklingar/:kennitala')
            .get(this.einstaklingarController.getByKennitala)
            .put(this.einstaklingarController.update)
            .delete(this.einstaklingarController.delete);
        app.route('/einstaklingar/born/:kennitala')
            .get(this.einstaklingarController.getByBornKennitala);
        */  
        app.route('/heimilisfong')
            .get(getHeimilisfong);
            /*.post(this.heimilisfongController.add);*/
        app.route('/heimilisfong/:id')
            .get(getHeimilisfangById);
            /*.put(this.heimilisfongController.update)
            .delete(this.heimilisfongController.delete);*/
    }
    
}

export {Routes};