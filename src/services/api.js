import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = `ed13542cc98255e453f3d93d2dcaa225`;

export const trendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
};

export const getMoviesById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
};

export const getMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return response.data.cast;
};

export const getMovieReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data.results;
};