import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { dataSources } from "./data-sources";
import { resolvers } from "./resolvers";

/** Port for Apollo Server */
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Apollo Server started at ${url}`);
});
