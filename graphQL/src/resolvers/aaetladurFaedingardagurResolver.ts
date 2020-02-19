import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";
import * as VMSDAO from "../DataFetch/VMSDAO";
import Context from "../context";
import { VMSdata } from "../interfaces/VMSdata";

export default {
    Query: {
        getAaetladirFaedingardagar: async (parent: any, args: any, context: Context, info: any): Promise<AaetladurFaedingardagur[]> => {
            return VMSDAO.getAaetladirFaedingardagar(args.eftir, args.fyrir);
        },
        getAaetladurFaedingardagurByKt: async (parent: any, args: any, context: Context, info: any): Promise<AaetladurFaedingardagur | null> => {
            return VMSDAO.getAaetladurFaedingardagurByKennitala(args.kennitala);
        }
    }
}