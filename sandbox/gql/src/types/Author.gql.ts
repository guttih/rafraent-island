import { gql } from "apollo-server-express";

export default gql`
  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  extend type Query {
    getAuthors: [Author]
  } 
`;