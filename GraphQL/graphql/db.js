const API_URL = 'https://yts.mx/api/v2/list_movies.json';
const MOVIE_DETAIL_URL = 'https://yts.mx/api/v2/movie_details.json';
const MOVIE_SUGGESTIONS_URL = 'https://yts.mx/api/v2/movie_suggestions.json';
import axios from 'axios';

export const getMovies = async (limit, minimum_rating) => {
    let request_URL = API_URL + '?';
    if (limit > 0 && limit < 51) {
        request_URL += `limit=${limit}&`;
    }
    if (minimum_rating > 0 && minimum_rating < 10) {
        request_URL += `minimum_rating=${minimum_rating}&`;
    }
    return await axios.get(request_URL).then((res) => {
        // console.log(res);
        return res.data.data.movies;
    });
};
export const getMovieById = async (id) => {
    return await axios
        .get(`${MOVIE_DETAIL_URL}?movie_id=${id}`)
        .then((res) => res.data.data.movie);
};
export const getSuggestions = async (id) => {
    return await axios
        .get(`${MOVIE_SUGGESTIONS_URL}?movie_id=${id}`)
        .then((res) => res.data.data.movies);
};
// export let Movies = [
//     {
//         id: 0,
//         name: 'movie1',
//         score: 100,
//     },
//     {
//         id: 1,
//         name: 'movie2',
//         score: 100,
//     },
//     {
//         id: 2,
//         name: 'movie3',
//         score: 100,
//     },
// ];

// export const getMoviesById = (id) => {
//     let filteredMovies = Movies.filter((movie) => {
//         return movie.id === id;
//     });
//     return filteredMovies[0];
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: Movies.length + 1,
//         name,
//         score,
//     };
//     Movies.push(newMovie);
//     return newMovie;
// };

// export const deleteMovie = (id) => {
//     const cleanedMovies = Movies.filter((movie) => {
//         return movie.id !== id;
//     });
//     if (cleanedMovies.length < Movies.length) {
//         Movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// };
