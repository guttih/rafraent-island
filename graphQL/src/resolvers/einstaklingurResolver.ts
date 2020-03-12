import {Einstaklingur} from "./../interfaces/Einstaklingur";
import {Heimilisfang} from "./../interfaces/Heimilisfang";
import {AaetladurFaedingardagur} from "./../interfaces/AaetladurFaedingardagur";
import {Faedingarorlofstekjur} from "./../interfaces/Faedingarorlofstekjur";
import * as einstaklingurDAO from "../DataAccess/einstaklingurDAO";
import * as heimilisfangDAO from "../DataAccess/heimilisfangDAO";
import * as VMSDAO from "../DataAccess/VMSDAO";
import Context from "../context";
import { makeExecutableSchema } from "apollo-server-express";

export default {
    Query: {
        getEinstaklingur: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur | null> => {
            return einstaklingurDAO.getEinstaklingurByKennitalaFromService(args.kennitala);
        },
        getEinstaklingar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getEinstaklingarFromService(args.faeddurEftir, args.faeddurFyrir);
        },
        getBornForeldris: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getBornByKennitalaFromService(args.kennitala);
        },
        getForeldrarBarns: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            return einstaklingurDAO.getForeldrarByKennitalaFromService(args.kennitala);
        },
        getForeldrar: async (parent: any, args: any, context: Context, info: any): Promise<Einstaklingur[]> => {
            let foreldrar = await einstaklingurDAO.getForeldrarFromService();

            if(args.aaetlDagurFra || args.aaetlDagurTil){
                const dagar = await VMSDAO.getAaetladirFaedingardagar(args.aaetlDagurFra, args.aaetlDagurTil);
                foreldrar = foreldrar.filter(foreldri => dagar.filter(dagur => dagur.kennitala == foreldri.kennitala).length > 0);
            }
            if(args.tekjuhaestu){
                let tekjur = await VMSDAO.getFaedingarorlofstekjur();
                tekjur = tekjur.filter(t => foreldrar.map(function(m){return m.kennitala}).includes(t.kennitala));
                const haestutekjur = tekjur.map(function(m){return m.manadartekjur}).sort((a,b) => b-a).slice(0,args.tekjuhaestu);
                const kennitolur = tekjur.filter( t => haestutekjur.includes(t.manadartekjur)).map(function(m){return m.kennitala});
                foreldrar = foreldrar.filter(f => kennitolur.includes(f.kennitala));
            }
            
            return foreldrar;
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