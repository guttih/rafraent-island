import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Einstaklingur} from "../entity/Einstaklingur";
import {connection} from "../connection/Connection"

/**
 * Loads all posts from the database.
 */
export const getEinstaklingar = async (request: Request, response: Response) => {
    
        await connection;

        const repository = getManager().getRepository(Einstaklingur);
        const simpleList = Object.keys(request.query).length === 0;
        if (simpleList) {
            const items = await repository.find();
            //const items = await repository.find({relations: ["born", "logheimili"]});
            response.send(items);
            return;
        }

        function zeroFirst(number: Number):String {
            return (number < 10) ? '0'+number.toString() : number.toString();
        }
        function dateToString(date: Date):String {
            return `${date.getFullYear()}-${zeroFirst(date.getMonth()+1)}-${zeroFirst(date.getDate())} `
                +`${zeroFirst(date.getHours())}:${zeroFirst(date.getMinutes())}:${zeroFirst(date.getSeconds())}`;
        }

        //we got params
        let fromDateStr, toDateStr;
        
        
        if (request.query.from !== undefined) {
            if (isNaN(Date.parse(request.query.from))){
                response.status(400).json({message:"from date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }

            fromDateStr = dateToString(new Date(request.query.from));
        }
        if (request.query.to !== undefined) {
            if (isNaN(Date.parse(request.query.to))){
                response.status(400).json({message:"to date invalid, use format yyyy-mm-dd hh:mm:ss, or just yyyy-mm-dd."})
                return;
            }
            toDateStr = dateToString(new Date(request.query.to));
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

        console.log(query);
        console.log(paramValues);
        try {
            const items = await getManager().query( query, paramValues);
            response.json(items);
            return;
        } catch(error){
            console.error("Error ", error);
            response.status(500).json({message:"There was an error!"});
        }; 
}