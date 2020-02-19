import { Heimilisfang } from "./Heimilisfang";
import {AaetladurFaedingardagur} from "./AaetladurFaedingardagur";
import {Faedingarorlofstekjur} from "./Faedingarorlofstekjur";

export interface Einstaklingur {
    kennitala: string;
    nafn: string;
    faedingardagur: string;
    maki_kennitala: string;
    maki: Einstaklingur;
    born: [Einstaklingur];
    foreldrar: [Einstaklingur];
    logheimili: [Heimilisfang];
    aaetladur_faedingardagur: AaetladurFaedingardagur;
    faedingarorlofstekjur: Faedingarorlofstekjur;
}