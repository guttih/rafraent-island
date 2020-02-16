import { buildFederatedSchema } from "@apollo/federation";
import Author from "./types/Author.gql";
import Book from "./types/Book.gql";
import bookResolver from "./resolvers/bookResolver";
import authorResolver from "./resolvers/authorResolver";

export const schema = buildFederatedSchema([
  {typeDefs: Author, resolvers: authorResolver},
  {typeDefs: Book, resolvers: bookResolver},
])