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
/*
    public addSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {
                let requestSuperHero = req.body;
                let requestPower = requestSuperHero.power;

                let superHero = new SuperHero();
                superHero.name = requestSuperHero.name;
                superHero.power = [];

                requestPower.forEach(requestPower => {
                   let power: Power = new Power();
                   power.ability = requestPower;
                   superHero.power.push(power);
                });

                await connection.manager.save(superHero);
                res.json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public updateSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {

                let superHero  = await connection.manager.findOne(SuperHero, req.params.superHeroId);

                let requestSuperHero = req.body;
                let requestPower = requestSuperHero.power;

                superHero.name = requestSuperHero.name;
                superHero.power = [];

                // delete previous power of our super-hero
                superHero.power.forEach(async power => {
                    await connection.manager.remove(Power, {id: power.id});
                });

                // add new power to our super-hero
                requestPower.forEach(requestPower => {
                    let power: Power = new Power();
                    power.ability = requestPower;
                    superHero.power.push(power);
                });

                await connection.manager.save(superHero);
                res.json({message: "Successfully Updated."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public getSuperHeroById(req: Request, res: Response) {
        connection
            .then(async connection => {
                let superHero  = await connection.manager.findOne(SuperHero, req.params.superHeroId);
                res.json(superHero)
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }

    public deleteSuperHero(req: Request, res: Response) {
        connection
            .then(async connection => {
                let superHero  = await connection.manager.findOne(SuperHero, req.params.superHeroId);

                // delete all power first
                superHero.power.forEach(async power => {
                    await connection.manager.remove(Power, {id: power.id});
                });

                // delete our super-hero
                await connection.manager.remove(SuperHero, {id: req.params.superHeroId});

                res.json({message: "Successfully Removed."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            });
    }*/
}

export {EinstaklingarController}