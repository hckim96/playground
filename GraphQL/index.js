import { GraphQLServer } from 'graphql-yoga';
// const graphqlYoga = require("graphql-yoga");
import resolvers from './graphql/resolvers';
const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers: resolvers,
});
server.start(() => {
    console.log('graphql server started');
});
