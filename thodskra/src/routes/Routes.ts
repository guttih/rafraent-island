import {Request, Response} from "express";
import {EinstaklingarController} from "../controllers/EinstaklingarController";
import {HeimilisfongController} from "../controllers/HeimilisfongController";


class Routes {

    private einstaklingarController: EinstaklingarController;
    private heimilisfongController: HeimilisfongController;
    

    constructor() {
        this.einstaklingarController = new EinstaklingarController();
        this.heimilisfongController = new HeimilisfongController();
        
    }

    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });

        app.route('/einstaklingar')
            .get(this.einstaklingarController.list);
        app.route('/heimilisfong')
            .get(this.heimilisfongController.list);
/*            .post(this.controller.addSuperHero);

        app.route('/superHero/:superHeroId')
            .get(this.controller.getSuperHeroById)
            .put(this.controller.updateSuperHero)
            .delete(this.controller.deleteSuperHero);
*/
    
    }
    
}

export {Routes};