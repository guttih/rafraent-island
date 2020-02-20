import {Heimilisfang} from "./../interfaces/Heimilisfang";
import * as heimilisfangDAO from "../DataAccess/heimilisfangDAO";
import Context from "../context";

export default {
    Query: {
        getHeimilisfong: async (parent: any, args: any, context: Context, info: any): Promise<Heimilisfang[]> => {
            return heimilisfangDAO.getHeimilisfongFromService();
        },
        getHeimilisfongByKt: async (parent: any, args: any, context: Context, info: any): Promise<Heimilisfang[]> => {
            return heimilisfangDAO.getHeimilisfongByKennitalaFromService(args.kennitala);
        }
    }
}