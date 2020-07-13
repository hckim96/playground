// import { Movies, getMoviesById, addMovie, deleteMovie } from './db.js';

import { getMovies, getMovieById, getSuggestions } from './db.js';

//
const resolvers = {
    Query: {
        Movies: (_, { limit, minimum_rating }) =>
            getMovies(limit, minimum_rating),
        Movie: (_, { id }) => getMovieById(id),
        Suggestions: (_, { id }) => getSuggestions(id),
    },
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id),
    // },
};

export default resolvers;
