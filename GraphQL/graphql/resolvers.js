import { Movies, getMoviesById, addMovie, deleteMovie } from './db.js';

//
const resolvers = {
    Query: {
        Movies: () => Movies,
        Movie: (_, { id }) => getMoviesById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    },
};

export default resolvers;
