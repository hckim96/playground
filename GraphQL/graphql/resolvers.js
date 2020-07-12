import { People, getPersonsById } from './db.js';

//
const resolvers = {
    Query: {
        People: () => People,
        Person: (_, { id }) => getPersonsById(id),
    },
};

export default resolvers;
