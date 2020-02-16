import {createConnection} from "typeorm";
import {Heimilisfong} from "../entity/Heimilisfong";
import {Einstaklingar} from "../entity/Einstaklingar";
import {Bornforeldrar} from "../entity/Bornforeldrar";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    entities: [
        Heimilisfong,
        Einstaklingar,
        Bornforeldrar
    ],
    synchronize: true,
logging: false
});