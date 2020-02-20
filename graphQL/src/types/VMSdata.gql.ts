import { gql } from "apollo-server-express";

export default gql`
  type VMSdata {
    kennitala: String
    aaetl_faedingardagur: String
    manadartekjur: Int
    adrarManadartekjur: Int
    personuafslattur: Float
    vidbotarlifeyrissparnadur: Float
  }

  extend type Query {
    getVMSInfo(fyrir: String = "2200-01-01", eftir: String = "1800-01-01"): [VMSdata]
  }
`;