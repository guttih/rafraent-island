import { gql } from "apollo-server-express";

export default gql`
  type Faedingarorlofstekjur {
    kennitala: String
    """
    Hlutfall persónuafsláttar(%)
    """
    personuafslattur: Float
    """
    Mánaðartekjur í ISK
    """
    manadartekjur: Int
    """
    Aðrar mánaðartekjur í ISK
    """
    adrarManadartekjur: Int
    """
    Hlutfall viðbótarlífeyrissparnaðar(%)
    """
    vidbotarlifeyrissparnadur: Float
  }

  extend type Query {
    getFaedingarorlofstekjur : [Faedingarorlofstekjur]
    getFaedingarorlofstekjurByKt(kennitala: String): Faedingarorlofstekjur
  }
`;