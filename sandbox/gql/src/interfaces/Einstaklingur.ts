export interface Einstaklingur {
    kennitala: string;
    nafn: string;
    faedingardagur: String;
    maki_kennitala: string;
    maki: Einstaklingur;
    born: [Einstaklingur];
    foreldrar: [Einstaklingur];
}