import { getEinstaklingarFromService } from "../DataFetch/einstaklingarDAO";
import Context from "../context";

export default {
  Query: {
    getEinstaklingar: async (parent: any, args: any, context: Context, info: any): Promise<any[]> => {
      return getEinstaklingarFromService();
    }
  }
}