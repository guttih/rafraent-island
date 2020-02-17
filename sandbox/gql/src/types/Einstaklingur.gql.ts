import { gql } from "apollo-server-express";

export default gql`
  type Einstaklingur {
    kennitala: String!
    nafn: String!
    faedingardagur: String
    maki_kennitala: String
    maki: Einstaklingur
  }

  extend type Query {
    getEinstaklingar: [Einstaklingur],
    getEinstaklingur(kennitala: String): Einstaklingur
  }
`;