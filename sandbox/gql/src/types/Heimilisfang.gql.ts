import { gql } from "apollo-server-express";

export default gql`
  type Heimilisfang {
    id: ID!
    postfang: String!
  }

  extend type Query {
    getHeimilisfong : [Heimilisfang]
    getHeimilisfongByKt(kennitala: String): [Heimilisfang]
  }
`;