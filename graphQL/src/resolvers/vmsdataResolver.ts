import * as VMSDAO from "../DataFetch/VMSDAO";
import Context from "../context";
import { VMSdata } from "../interfaces/VMSdata";

export default {
    Query: {
        getVMSInfo: async (parent: any, args: any, context: Context, info: any): Promise<VMSdata[]> => {
            const dagar = await VMSDAO.getAaetladirFaedingardagar(args.eftir, args.fyrir);

            let ret: VMSdata[] = [];

            for (const dagur of dagar){
                const tekjur = await VMSDAO.getFaedingarorlofstekjurByKennitala(dagur.kennitala);

                const vms:VMSdata = {
                    kennitala: dagur.kennitala,
                    dagsetning: dagur.dagsetning,
                    manadartekjur: tekjur?.manadartekjur,
                    adrarManadartekjur: tekjur?.adrarManadartekjur,
                    personuafslattur: tekjur?.personuafslattur,
                    vidbotarlifeyrissparnadur: tekjur?.vidbotarlifeyrissparnadur
                };
                ret.push(vms);
            }

            return ret;
        }
    }
}