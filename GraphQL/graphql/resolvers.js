// import { Movies, getMoviesById, addMovie, deleteMovie } from './db.js';

import { getMovies } from './db.js';

//
const resolvers = {
    Query: {
        Movies: () => getMovies,
        // Movie: (_, { id }) => getMoviesById(id),
    },
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id),
    // },
};

export default resolvers;
