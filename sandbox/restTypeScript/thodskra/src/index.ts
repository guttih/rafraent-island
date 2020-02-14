import "reflect-metadata";
import {createConnection} from "typeorm";
import {Heimilisfong} from "./entity/Heimilisfong";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const item = new Heimilisfong();
    item.postfang= "einhverjirvellir 3";
    await connection.manager.save(item);
    console.log("Saved a new user with id: " + item.id);
    console.log("Loading users from the database...");
    const users = await connection.manager.find(Heimilisfong);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
