import {createConnection} from "typeorm";
import {Heimilisfong} from "../entity/Heimilisfong";
import {Einstaklingar} from "../entity/Einstaklingar";
import { EinstaklingarController } from "../controllers/EinstaklingarController";
//import Power from "../entity/Power";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    entities: [
        Heimilisfong,
        Einstaklingar
    ],
    synchronize: true,
logging: false
});