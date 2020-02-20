import { gql } from "apollo-server-express";

export default gql`
  type Einstaklingur {
    kennitala: String!
    nafn: String!
    faedingardagur: String
    """
    Kennitala skráðs maka
    """
    maki_kennitala: String
    """
    Nánari upplýsingar um maka
    """
    maki: Einstaklingur
    """
    Börn einstaklings
    """
    born: [Einstaklingur]
    foreldrar: [Einstaklingur]
    logheimili: [Heimilisfang]
    """
    Áætlaður fæðingardagur barns ef einstaklingur á von á barni
    """
    aaetladur_faedingardagur: AaetladurFaedingardagur
    """
    Upplýsingar um tekjur vegna fæðingarorlofs
    """
    faedingarorlofstekjur: Faedingarorlofstekjur
  }

  extend type Query {
    getEinstaklingar(faeddurEftir: String = "1800-01-01"): [Einstaklingur],
    getEinstaklingur(kennitala: String!): Einstaklingur,
    getBornForeldris(kennitala: String!): [Einstaklingur],
    getForeldrarBarns(kennitala: String!): [Einstaklingur],
    getForeldrar(aaetlDagurFra: String, aaetlDagurTil: String): [Einstaklingur]
  }
`;