import { GraphQLServer } from 'graphql-yoga';
// const graphqlYoga = require("graphql-yoga");

const server = new GraphQLServer({});
server.start(() => {
    console.log('graphql server started');
});
