import { buildFederatedSchema } from "@apollo/federation";
import Einstaklingur from "./types/Einstaklingur.gql";
import einstaklingurResolver from "./resolvers/einstaklingurResolver";
import Heimilisfang from "./types/Heimilisfang.gql";
import heimilisfangResolver from "./resolvers/heimilisfangResolver";
import AaetladurFaedingardagur from "./types/AaetladurFaedingardagur.gql";
import aaetladurFaedingardagurResolver from "./resolvers/aaetladurFaedingardagurResolver";
import Faedingarorlofstekjur from "./types/Faedingarorlofstekjur.gql";
import faedingarorlofstekjurResolver from "./resolvers/faedingarorlofstekjurResolver";

export const schema = buildFederatedSchema([
  {typeDefs: Einstaklingur, resolvers: einstaklingurResolver},
  {typeDefs: Heimilisfang, resolvers: heimilisfangResolver},
  {typeDefs:AaetladurFaedingardagur, resolvers: aaetladurFaedingardagurResolver},
  {typeDefs: Faedingarorlofstekjur, resolvers: faedingarorlofstekjurResolver}
])