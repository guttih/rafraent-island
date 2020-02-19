import { gql } from "apollo-server-express";

export default gql`
  type AaetladurFaedingardagur {
    kennitala: String
    """
    Dagsetning áætlaðs fæðingardags
    """
    dagsetning: String
  }

  extend type Query {
    getAaetladirFaedingardagar(fyrir: String = "2200-01-01", eftir: String = "1800-01-01") : [AaetladurFaedingardagur],
    getAaetladurFaedingardagurByKt(kennitala: String): AaetladurFaedingardagur
  }
`;