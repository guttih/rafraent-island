import {createConnection} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";
import {Einstaklingur} from "../entity/Einstaklingur";

export const connection = createConnection({
    type: "postgres",
    host: process.env.NODE_ENV === "production" ? "database" : "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [
        Heimilisfang,
        Einstaklingur
    ],
    synchronize: false,
logging: false
});