import {Faedingarorlofstekjur} from "./../interfaces/Faedingarorlofstekjur";
import * as VMSDAO from "../DataAccess/VMSDAO";
import Context from "../context";

export default {
    Query: {
        getFaedingarorlofstekjur: async (parent: any, args: any, context: Context, info: any): Promise<Faedingarorlofstekjur[]> => {
            return VMSDAO.getFaedingarorlofstekjur();
        },
        getFaedingarorlofstekjurByKt: async (parent: any, args: any, context: Context, info: any): Promise<Faedingarorlofstekjur | null> => {
            return VMSDAO.getFaedingarorlofstekjurByKennitala(args.kennitala);
        }
    }
}