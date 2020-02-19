import {Einstaklingur} from "./../interfaces/Einstaklingur";
import {Heimilisfang} from "./../interfaces/Heimilisfang";
import * as einstaklingurDAO from "../DataFetch/einstaklingurDAO";
import * as heimilisfangDAO from "../DataFetch/heimilisfangDAO";
import Context from "../context";

export default {
    Query: {
        getEinstaklingur: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur | null> => {
            return einstaklingurDAO.getEinstaklingurByKennitalaFromService(args.kennitala);
        },
        getEinstaklingar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return (await einstaklingurDAO.getEinstaklingarFromService())
                .filter(a => a.faedingardagur > args.faeddurEftir || args.faeddurEftir == "1800-01-01");
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
            if(einstaklingur.maki_kennitala){
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
        },
        logheimili: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Heimilisfang[]> => {
            const logheimili = heimilisfangDAO.getHeimilisfongByKennitalaFromService(einstaklingur.kennitala);
            return logheimili;
        }
    }
}