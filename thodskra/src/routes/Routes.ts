import {Request, Response} from "express";
import {EinstaklingarController} from "../controllers/EinstaklingarController";
import {HeimilisfongController} from "../controllers/HeimilisfongController";
//import {BornforeldrarController} from "../controllers/BornforeldrarController";



class Routes {

    private einstaklingarController: EinstaklingarController;
    private heimilisfongController: HeimilisfongController;
//    private bornforeldrarController: BornforeldrarController;
    

    constructor() {
        this.einstaklingarController = new EinstaklingarController();
        this.heimilisfongController = new HeimilisfongController();
//        this.bornforeldrarController = new BornforeldrarController();
        
        
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
            .get(this.einstaklingarController.list)
            .post(this.einstaklingarController.add);
        app.route('/einstaklingar/:kennitala')
            .get(this.einstaklingarController.getByKennitala)
            .put(this.einstaklingarController.update)
            .delete(this.einstaklingarController.delete);
        app.route('/einstaklingar/born/:kennitala')
            .get(this.einstaklingarController.getByBornKennitala);
            
        app.route('/heimilisfong')
            .get(this.heimilisfongController.list)
            .post(this.heimilisfongController.add);
        app.route('/heimilisfong/:id')
            .get(this.heimilisfongController.getById)
            .put(this.heimilisfongController.update)
            .delete(this.heimilisfongController.delete);
    }
    
}

export {Routes};