import {Request, Response} from 'express';
import {connection}        from "../connection/Connection";
import {Einstaklingar}     from "../entity/Einstaklingar";
import {Bornforeldrar}     from "../entity/Bornforeldrar";
import { getConnection, getRepository, In } from 'typeorm';

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

                let  requestItemToEntity = function requestItemToEntity(requestItem: any):Einstaklingar {
                    let item = new Einstaklingar();
                    if (requestItem.kennitala      !== undefined) item.kennitala      = requestItem.kennitala;
                    if (requestItem.nafn           !== undefined) item.nafn           = requestItem.nafn;
                    if (requestItem.faedingardagur !== undefined) item.faedingardagur = requestItem.faedingardagur;
                    if (requestItem.maki           !== undefined) item.maki           = requestItem.maki;
                    return item;
                };

                let  requestItemsToEntityArray = function requestItemsToEntityArray(isParentArray:Boolean, einstaklingur : Einstaklingar, requestArray: any[], connection: { manager: { findOne: (arg0: typeof Einstaklingar, arg1: any) => any; }; }, saveArray: any[]): void {
                
                if (requestArray!== undefined){
                        requestArray.forEach(requestItem => {
                            let subItem;
                            if (requestItem.kennitala !== undefined) { 
                                if (requestItem.nafn !== undefined) { //einstaklingur cannot be created without a name (that's a table constraint)
                                    subItem = new Einstaklingar();
                                    subItem.kennitala = requestItem.kennitala;
                                    subItem.nafn      = requestItem.nafn;
                                    if (requestItem.faedingardagur !== undefined) subItem.faedingardagur = requestItem.faedingardagur;
                                    if (requestItem.maki           !== undefined) subItem.maki           = requestItem.maki;
                                } else {
                                    subItem  = connection.manager.findOne(Einstaklingar, requestItem.kennitala).then((foreldri)=>{
                                        if (isParentArray) {
                                            if (foreldri.born === undefined) {
                                                foreldri.born = [{einstaklingur}]
                                            } else {
                                                var alreadyExits = foreldri.born.filter(born => (born.kennitala === einstaklingur.kennitala));
                                                if (!alreadyExits) {
                                                    foreldri.born.add(einstaklingur);
                                                }
                                            }
                                    }
                                    });

                                }
                                saveArray.push(subItem);
                            }
                        });
                    }
                };

                let requestItem      = req.body;
                let requestForeldrar = requestItem.foreldrar;
                let requestBorn      = requestItem.born;

                let item = requestItemToEntity(requestItem);
                
                

                //Get all foreldrar if any
                if (requestForeldrar!== undefined){
                    item.foreldrar = [];
                    requestItemsToEntityArray(true, item, requestForeldrar, connection, item.foreldrar);
                    
                    //add current child to foreldri
                    item.foreldrar.forEach(foreldri => {
                            if (foreldri.born === undefined) foreldri.born = [];
                            foreldri.born.push(item);
                    });
                }
                
                item.born  = [];
                //Get all born if any
                if (requestBorn!== undefined){
                    
                    requestItemsToEntityArray(false, item, requestBorn, connection, item.born);
                }
                
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

                let  requestItemsToEntityArray = function requestItemsToEntityArray(isParentArray:Boolean, einstaklingur : Einstaklingar, requestArray: any[], connection: { manager: { findOne: (arg0: typeof Einstaklingar, arg1: any) => any; }; }, saveArray: any[]): void {
                
                    if (requestArray!== undefined){
                            requestArray.forEach(requestItem => {
                                let subItem;
                                if (requestItem.kennitala !== undefined) { 
                                    if (requestItem.nafn !== undefined) { //einstaklingur cannot be created without a name (that's a table constraint)
                                        subItem = new Einstaklingar();
                                        subItem.kennitala = requestItem.kennitala;
                                        subItem.nafn      = requestItem.nafn;
                                        if (requestItem.faedingardagur !== undefined) subItem.faedingardagur = requestItem.faedingardagur;
                                        if (requestItem.maki           !== undefined) subItem.maki           = requestItem.maki;
                                    } else {
                                        subItem  = connection.manager.findOne(Einstaklingar, requestItem.kennitala).then((foreldri)=>{
                                            if (isParentArray) {
                                                if (foreldri.born === undefined) {
                                                    foreldri.born = [einstaklingur.kennitala]
                                                } else {
                                                    var alreadyExits = foreldri.born.filter(born => (born.kennitala === einstaklingur.kennitala));
                                                    if (!alreadyExits) {
                                                        foreldri.born.add(einstaklingur.kennitala);
                                                    }
                                                }
                                        }
                                        });
    
                                    }
                                    saveArray.push(subItem);
                                }
                            });
                        }
                    };

                let item  = await connection.manager.findOne(Einstaklingar, req.params.kennitala);
                let requestItem     = req.body;
                item.nafn           = requestItem.nafn;
                item.faedingardagur = requestItem.faedingardagur;
                item.maki           = requestItem.maki;

                let requestForeldrar = requestItem.foreldrar;
                let requestBorn      = requestItem.born;

                //add foreldrar
               
                

                //Get all foreldrar if any
                if (requestForeldrar!== undefined){
                    item.foreldrar = [];
                    requestItemsToEntityArray(true, item, requestForeldrar, connection, item.foreldrar);
                }

                //add current child to foreldri
                item.foreldrar.forEach(foreldri => {
                        if (foreldri.born === undefined) foreldri.born = [];
                        foreldri.born.push(item);
                });

                //Get all born if any
                if (requestBorn!== undefined) {
                    item.born           = [];
                    requestItemsToEntityArray(false, item, requestBorn, connection, item.born);
                }

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

    public getByBornKennitala(req: Request, res: Response) {
        connection
            .then(async connection => {
                
                /*const batchForeldrar = async (barnKennitolur: string[]) => {
                    const barnForeldrar = await Einstaklingar.find({
                      join: {
                        alias: "bornforeldrar",
                        innerJoinAndSelect: {
                          author: "bornforeldrar.foreldriItem"
                        }
                      },
                      where: {
                        barn: In(barnKennitolur)
                      }
                    });
                  
                    const barnKennitalaToForeldrar: { [key: string]: Einstaklingar[] } = {};

                    barnForeldrar.forEach(bf => {
                      if (bf.born in barnKennitalaToForeldrar) {
                        barnKennitalaToForeldrar[bf.barn].push((bf as any).__foreldriItem__);
                      } else {
                        barnKennitalaToForeldrar[bf.barn] = [(bf as any).__foreldriItem__];
                      }
                    });
                  
                    return barnKennitolur.map(barn => barnKennitalaToForeldrar[barn]);
                  };*/

                /*const item = await getRepository(Bornforeldrar)
                .createQueryBuilder("bornforeldrar")
                .where("bornforeldrar.barn = :barn", { barn: req.params.kennitala })
                .getMan()*/
                var kennitolur = [req.params.kennitala];
                var item = await Einstaklingar.findOne(Einstaklingar, req.params.kennitala);
                //var item = batchForeldrar(kennitolur)
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