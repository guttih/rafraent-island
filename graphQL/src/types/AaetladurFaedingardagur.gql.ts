import { gql } from "apollo-server-express";

export default gql`
  type AaetladurFaedingardagur {
    kennitala: String
    dagsetning: String
  }

  extend type Query {
    getAaetladirFaedingardagar : [AaetladurFaedingardagur]
    getAaetladurFaedingardagurByKt(kennitala: String): AaetladurFaedingardagur
  }
`;