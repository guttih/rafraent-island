import { gql } from "apollo-server-express";

export default gql`
  type Book {
    id: ID!
    name: String
    pageCount: Int!
    author: [Author]!
  }

  extend type Query {
    getBooks: [Book]
  }
`;