import { getEinstaklingurByKennitalaFromService } from "../DataFetch/einstaklingurDAO";
import Context from "../context";

export default {
  Query: {
    getEinstaklingur: async (parent: any, args: any, context: Context, info: any): Promise<any> => {
        return getEinstaklingurByKennitalaFromService(args.kennitala);
      }
    }
}