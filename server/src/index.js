const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const typeDefs = require("./schema");
const mocks = require("./mocks");

async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks,
        }),
    });

    const { url } = await startStandaloneServer(server);
    console.log(`🚀  Server is running! 📭  Query at ${url}`);
}

startApolloServer();