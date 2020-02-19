import { Heimilisfang } from "./Heimilisfang";

export interface Einstaklingur {
    kennitala: string;
    nafn: string;
    faedingardagur: string;
    maki_kennitala: string;
    maki: Einstaklingur;
    born: [Einstaklingur];
    foreldrar: [Einstaklingur];
    logheimili: [Heimilisfang];
}