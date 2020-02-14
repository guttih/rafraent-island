import {createConnection} from "typeorm";
import {Heimilisfong} from "../entity/Heimilisfong";
//import Power from "../entity/Power";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    entities: [
        Heimilisfong
//        ,Power
    ],
    synchronize: true,
logging: false
});