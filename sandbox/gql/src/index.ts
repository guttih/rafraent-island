const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { schema } from "./schemas";
import depthLimit from "graphql-depth-limit";
import mocks from "./mock";
import Context from "./context"

const isDevelopment = process.env.NODE_ENV !== "production";

const server = new ApolloServer({ 
  schema: schema,
  context: async ({ req, res }: any): Promise<Context> => {
    const user = {name: "Gunni"};
    const loader = {};
    return {user, loader}
  }, 
  // Disable subscriptions since they are not used
  subscriptions: false,
  // tracing and debug not enable in production
  tracing: isDevelopment,
  debug: isDevelopment,
  validationRules: [depthLimit(3)],
 });

const app = express();

app.get("/books", (req: any, res: any) => {
  res.send(mocks.books);
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);