import {Einstaklingur} from "./../interfaces/Einstaklingur";
import { getEinstaklingurByKennitalaFromService } from "../DataFetch/einstaklingurDAO";
import Context from "../context";

export default {
  Query: {
    getEinstaklingur: async (parent: any, args: any, context: Context, info: any): Promise<any> => {
        return getEinstaklingurByKennitalaFromService(args.kennitala);
      }
    },
    Einstaklingur: {
        maki: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Einstaklingur | null> => {
            console.log(einstaklingur);
            if(einstaklingur.maki_kennitala !== undefined && einstaklingur.maki_kennitala !== null){
                const maki = getEinstaklingurByKennitalaFromService(einstaklingur.maki_kennitala);
            return maki;
            }
            return null;
        }
    }
}