import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";
import {connection} from "../connection/Connection"
import {errorReport, zeroFirst, dateToTimestapString} from "../libs/LibContollers"

/**
 * Loads list of einstaklingar
 * Additional query strings are from and to 
 * the timestamp format is 'yyyy-mm-dd hh:mm:ss'
 */
export const einstaklingarGet = async (request: Request, response: Response) => {

    try {   
            await connection;
            const repository = getManager().getRepository(Einstaklingur);
            const simpleList = Object.keys(request.query).length === 0;
            if (simpleList) {
                const items = await repository.find();
                //const items = await repository.find({relations: ["born", "logheimili"]});
                response.send(items);
                return;
            }

            

            //we got params
            let fromDateStr, toDateStr;
            
            
            if (request.query.from !== undefined) {
                if (isNaN(Date.parse(request.query.from))){
                    response.status(400).json({message:"from date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                    return;
                }

                fromDateStr = dateToTimestapString(new Date(request.query.from));
            }
            if (request.query.to !== undefined) {
                if (isNaN(Date.parse(request.query.to))){
                    response.status(400).json({message:"to date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                    return;
                }
                toDateStr = dateToTimestapString(new Date(request.query.to));
            }

            if (fromDateStr === undefined && toDateStr === undefined) {
                response.status(400).json({message:'parameters "from" and "to" are missing'});
                return;
            }

            //let's create the query, params seem to be ok
            let argument = 0;
            let paramValues = [];
            let fromSqlDateStr = "";
            let toSqlDateStr = "";

            if (fromDateStr  !== undefined) {
                fromSqlDateStr = `e.faedingardagur >= $${++argument}`;
                paramValues.push(fromDateStr);
            }

            if (toDateStr  !== undefined) {
                toSqlDateStr = `e.faedingardagur <= $${++argument}`;
                paramValues.push(toDateStr);
            }

            let and = (paramValues.length > 1)? " AND ":"";
            let query =  ' SELECT e.kennitala, e.nafn, e.faedingardagur, e.maki_kennitala'
                        +' FROM einstaklingur e'
                        +` WHERE ${fromSqlDateStr} ${and} ${toSqlDateStr}`;

            try {
                const items = await getManager().query( query, paramValues);
                response.json(items);
                return;
            } catch(error){
                errorReport(response, error, 400, "There was an error running your query");
            }; 
        } catch(error) {
            errorReport(response, error);
        }
        
}

export const einstaklingurGetBorn = async (request: Request, response: Response) => {

    try {   
        await connection;
        const repository = getManager().getRepository(Einstaklingur);
        
        let fromDateStr, toDateStr;
        
        
        if (request.query.from !== undefined) {
            if (isNaN(Date.parse(request.query.from))){
                response.status(400).json({message:"from date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }

            fromDateStr = dateToTimestapString(new Date(request.query.from));
        }
        if (request.query.to !== undefined) {
            if (isNaN(Date.parse(request.query.to))){
                response.status(400).json({message:"to date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }
            toDateStr = dateToTimestapString(new Date(request.query.to));
        }

        /*if (fromDateStr === undefined && toDateStr === undefined) {
            response.status(400).json({message:'parameters "from" and "to" are missing'});
            return;
        }*/
        //let's create the query, params seem to be ok
        let argument = 0;
        let paramValues = [];
        let fromSqlDateStr = "";
        let toSqlDateStr = "";

        if (fromDateStr  !== undefined) {
            fromSqlDateStr = `e.faedingardagur >= $${++argument}`;
            paramValues.push(fromDateStr);
        }

        if (toDateStr  !== undefined) {
            toSqlDateStr = `e.faedingardagur <= $${++argument}`;
            paramValues.push(toDateStr);
        }

        let where = (paramValues.length > 0)? " WHERE ":"";
        let and =   (paramValues.length > 1)? " AND ":"";
        let query =  `SELECT DISTINCT e.*
                      FROM einstaklingur e
                      INNER JOIN foreldri_barn b ON b.barn_kennitala = e.kennitala
                      ${where} ${fromSqlDateStr} ${and} ${toSqlDateStr}`;

        try {
            const items = await getManager().query( query, paramValues);
            response.json(items);
            return;
        } catch(error){
            errorReport(response, error, 400, "There was an error running your query");
        }; 
    } catch(error) {
        errorReport(response, error);
    }
    
}

export const einstaklingurGetForeldrar = async (request: Request, response: Response) => {

    try {   
        
        await connection;
        const repository = getManager().getRepository(Einstaklingur);
        
        let fromDateStr, toDateStr;
        
        if (request.query.from !== undefined) {
            if (isNaN(Date.parse(request.query.from))){
                response.status(400).json({message:"from date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }

            fromDateStr = dateToTimestapString(new Date(request.query.from));
        }
        if (request.query.to !== undefined) {
            if (isNaN(Date.parse(request.query.to))){
                response.status(400).json({message:"to date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }
            toDateStr = dateToTimestapString(new Date(request.query.to));
        }

        //let's create the query, params seem to be ok
        let argument = 0;
        let paramValues = [];
        let fromSqlDateStr = "";
        let toSqlDateStr = "";

        if (fromDateStr  !== undefined) {
            fromSqlDateStr = `e.faedingardagur >= $${++argument}`;
            paramValues.push(fromDateStr);
        }

        if (toDateStr  !== undefined) {
            toSqlDateStr = `e.faedingardagur <= $${++argument}`;
            paramValues.push(toDateStr);
        }

        let where = (paramValues.length > 0)? " WHERE ":"";
        let and =   (paramValues.length > 1)? " AND ":"";
        let query =  `SELECT DISTINCT e.*
                      FROM einstaklingur e
                      INNER JOIN foreldri_barn f ON f.foreldri_kennitala = e.kennitala 
                      ${where} ${fromSqlDateStr} ${and} ${toSqlDateStr}`;
        try {
            const items = await getManager().query( query, paramValues);
            response.json(items);
            return;
        } catch(error){
            errorReport(response, error, 400, "There was an error running your query");
        }; 
    } catch(error) {
        errorReport(response, error);
    }
}

export const einstaklingurSave = async (request: Request, response: Response) => {
    
    try {
        await connection;
        const repository = getManager().getRepository(Einstaklingur);

        const newItem = repository.create(request.body);

        await repository.save(newItem)
        .then((data)=>{
            console.log("saved data");console.log(data);
        })
        .catch(error => {

                errorReport(response, error, 422, "Error saving data!");
        });

        response.send(newItem);
    } catch (error) {
        errorReport(response, error);
    }
}

export const einstaklingurGetByKennitalaDetailed = async(request: Request, response: Response) => {
    
    try{
        await connection;
        const repository = getManager().getRepository(Einstaklingur);
        const item = await repository.findOne({where:{kennitala: request.params.kennitala},relations: ["born", "logheimili"]});

        if (!item) {
            response.status(404).json({"message":"Not found!"});
            response.end();
            return;
        } else {
            if (item.maki_kennitala){
                const felagi = await repository.findOne({where:{kennitala: item.maki_kennitala},relations: ["born", "logheimili"]});
                if (felagi) {
                    item.maki = felagi;
                }
            }
        }
        // return loaded item
        response.send(item);
    } catch(error) {
        errorReport(response, error);
    }
}
export const einstaklingurGetByKennitala = async(request: Request, response: Response) => {
    
    try{
        await connection;
        const repository = getManager().getRepository(Einstaklingur);
        const item = await repository.findOne({where:{kennitala: request.params.kennitala}});

        response.send(item);
    } catch(error) {
        errorReport(response, error);
    }
}

export const einstaklingurDeleteByKennitala = async(request: Request, response: Response) => {
    
    try{
        await connection;
        const repository = getManager().getRepository(Einstaklingur);
        const item = await repository.findOne({where:{kennitala: request.params.kennitala}});

        if (!item) {
            response.status(404).json({message:"Kennitala not found!"});;
            return;
        }

        await repository.remove(item);

        // return loaded item
        response.json({
            message: "Item deleted item",
            item   : item
        });

    } catch(error) {
        errorReport(response, error);
    }
}

export const einstaklingurGetForeldrarByKennitala = async(request: Request, response: Response) => {
    
    try {
        await connection;
        const items = await getManager().query( ` SELECT e.kennitala, e.nafn, e.faedingardagur, e.maki_kennitala
                                                  FROM foreldri_barn fb
                                                  LEFT JOIN einstaklingur e ON e.kennitala = fb.foreldri_kennitala
                                                  WHERE barn_kennitala = $1`,
                                                [request.params.kennitala]);
        
        response.json(items);
        return;
    } catch(error){
        errorReport(response, error);
    }; 
}

export const einstaklingurGetBornByKennitala = async (request: Request, response: Response) => {
    
    try {
        await connection;
        const items = await getManager().query( ' SELECT e.kennitala, e.nafn, e.faedingardagur, e.maki_kennitala'
                                               +' FROM foreldri_barn fb'
                                               +' LEFT JOIN einstaklingur e ON e.kennitala = fb.barn_kennitala' 
                                               +' WHERE foreldri_kennitala = $1',
                                                [request.params.kennitala]);
        response.json(items);
        return;
    } catch(error){
        errorReport(response, error);
    }; 
}