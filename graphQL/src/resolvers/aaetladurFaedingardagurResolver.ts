import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";
import * as VMSDAO from "../DataFetch/VMSDAO";
import Context from "../context";

export default {
    Query: {
        getAaetladirFaedingardagar: async (parent: any, args: any, context: Context, info: any): Promise<AaetladurFaedingardagur[]> => {
            return VMSDAO.getAaetladirFaedingardagar();
        },
        getAaetladurFaedingardagurByKt: async (parent: any, args: any, context: Context, info: any): Promise<AaetladurFaedingardagur | null> => {
            return VMSDAO.getAaetladurFaedingardagurByKennitala(args.kennitala);
        }
    }
}