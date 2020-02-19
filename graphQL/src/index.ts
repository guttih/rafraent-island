const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { schema } from "./schemas";
import depthLimit from "graphql-depth-limit";
import Context from "./context"

const isDevelopment = process.env.NODE_ENV !== "production";

const server = new ApolloServer({ 
  schema: schema,
  context: async ({ req, res }: any): Promise<Context> => {
    const user = {name: "Guðni"};
    const loader = {};
    return {user, loader}
  }, 
  // Disable subscriptions since they are not used
  subscriptions: false,
  // tracing and debug not enable in production
  tracing: isDevelopment,
  debug: isDevelopment,
  validationRules: [depthLimit(4)],
 });

const app = express();

server.applyMiddleware({ 
  app,
  path: '/graphql' 
});

app.listen({ port: 4000 }, () =>
  console.log(` Server ready at http://localhost:4000${server.graphqlPath}`)
);