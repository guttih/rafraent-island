import {Einstaklingur} from "./../interfaces/Einstaklingur";
import * as einstaklingurDAO from "../DataFetch/einstaklingurDAO";
import Context from "../context";

export default {
    Query: {
        getEinstaklingur: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur | null> => {
            return einstaklingurDAO.getEinstaklingurByKennitalaFromService(args.kennitala);
        },
        getEinstaklingar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getEinstaklingarFromService();
        },
        getBorn: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getBornByKennitalaFromService(args.kennitala);
        },
        getForeldrar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getForeldrarByKennitalaFromService(args.kennitala);
        }
    },
    Einstaklingur: {
        maki: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Einstaklingur | null> => {
            if(einstaklingur.maki_kennitala !== undefined && einstaklingur.maki_kennitala !== null){
                const maki = einstaklingurDAO.getEinstaklingurByKennitalaFromService(einstaklingur.maki_kennitala);
            return maki;
            }
            return null;
        },
        born: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            const born = einstaklingurDAO.getBornByKennitalaFromService(einstaklingur.kennitala);
            return born;
        },
        foreldrar: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            const foreldrar = einstaklingurDAO.getForeldrarByKennitalaFromService(einstaklingur.kennitala);
            return foreldrar;
        }
    }

}