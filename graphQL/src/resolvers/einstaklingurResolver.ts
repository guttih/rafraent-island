import {Einstaklingur} from "./../interfaces/Einstaklingur";
import {Heimilisfang} from "./../interfaces/Heimilisfang";
import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";
import {Faedingarorlofstekjur} from "./../interfaces/Faedingarorlofstekjur";
import * as einstaklingurDAO from "../DataAccess/einstaklingurDAO";
import * as heimilisfangDAO from "../DataAccess/heimilisfangDAO";
import * as VMSDAO from "../DataAccess/VMSDAO";
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
        getBornForeldris: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getBornByKennitalaFromService(args.kennitala);
        },
        getForeldrarBarns: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getForeldrarByKennitalaFromService(args.kennitala);
        },
        getForeldrar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            const foreldrar = await einstaklingurDAO.getForeldrarFromService();

            if(args.aaetlDagurFra || args.aaetlDagurTil){
                const dagar = await VMSDAO.getAaetladirFaedingardagar(args.aaetlDagurFra, args.aaetlDagurTil);
                return foreldrar.filter(foreldri => dagar.filter(dagur => dagur.kennitala == foreldri.kennitala).length > 0);
            }
            else{
                return foreldrar;
            }
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
        },
        aaetladur_faedingardagur: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<AaetladurFaedingardagur | null> => {
            const faedingardagur = VMSDAO.getAaetladurFaedingardagurByKennitala(einstaklingur.kennitala);
            return faedingardagur;
        },
        faedingarorlofstekjur: async (einstaklingur: Einstaklingur, args: any, context: Context, info: any): Promise<Faedingarorlofstekjur | null> => {
            const tekjur = VMSDAO.getFaedingarorlofstekjurByKennitala(einstaklingur.kennitala);
            return tekjur;
        }
    }
}