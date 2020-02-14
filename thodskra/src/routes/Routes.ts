import {Request, Response} from "express";
import {HeimilisfongController} from "../controllers/HeimilisfongController";

class Routes {

    private heimilisfongController: HeimilisfongController;

    constructor() {
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

        app.route('/heimilisfong')
            .get(this.heimilisfongController.getAll);
/*            .post(this.controller.addSuperHero);

        app.route('/superHero/:superHeroId')
            .get(this.controller.getSuperHeroById)
            .put(this.controller.updateSuperHero)
            .delete(this.controller.deleteSuperHero);
*/
    }
    
}

export {Routes};