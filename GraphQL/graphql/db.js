export let Movies = [
    {
        id: 0,
        name: 'movie1',
        score: 100,
    },
    {
        id: 1,
        name: 'movie2',
        score: 100,
    },
    {
        id: 2,
        name: 'movie3',
        score: 100,
    },
];

export const getMoviesById = (id) => {
    let filteredMovies = Movies.filter((movie) => {
        return movie.id === id;
    });
    return filteredMovies[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: Movies.length + 1,
        name,
        score,
    };
    Movies.push(newMovie);
    return newMovie;
};

export const deleteMovie = (id) => {
    const cleanedMovies = Movies.filter((movie) => {
        return movie.id !== id;
    });
    if (cleanedMovies.length < Movies.length) {
        Movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};
