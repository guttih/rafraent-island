import {createConnection} from "typeorm";
import {Heimilisfang} from "../entity/Heimilisfang";
import {Einstaklingur} from "../entity/Einstaklingur";

export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    entities: [
        Heimilisfang,
        Einstaklingur
    ],
    synchronize: false,
logging: false
});