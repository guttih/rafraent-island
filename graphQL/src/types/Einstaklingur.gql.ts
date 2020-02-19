import { gql } from "apollo-server-express";

export default gql`
  type Einstaklingur {
    kennitala: String!
    nafn: String!
    faedingardagur: String
    maki_kennitala: String
    maki: Einstaklingur
    born: [Einstaklingur]
    foreldrar: [Einstaklingur]
    logheimili: [Heimilisfang]
  }

  extend type Query {
    getEinstaklingar(faeddurEftir: String = "1800-01-01"): [Einstaklingur],
    getEinstaklingur(kennitala: String): Einstaklingur,
    getBorn(kennitala: String): [Einstaklingur],
    getForeldrar(kennitala: String): [Einstaklingur]
  }
`;