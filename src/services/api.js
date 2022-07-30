import axios from 'axios';
import { BASE_URL } from 'constants.api/constants';
import { API_KEY } from 'constants.api/constants';
import { TRENDING_URL } from 'constants.api/constants';
import { SEARCH_URL } from 'constants.api/constants';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const trendingMovies = async () => {
  try {
    const response = await customAxios.get(TRENDING_URL, {
      params: { api_key: API_KEY }
    })
    return response.data.results;
  } catch {
    console.log('error');
  }
};

export const searchMovies = async (query) => {
  try {
      const response = await customAxios.get(SEARCH_URL, {
      params: { api_key: API_KEY , query: query}
    });
    return response.data.results;
   } catch {
    console.log('error');
  }
};

export const getMoviesById = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}`, {
      params: { api_key: API_KEY }
    });
    return response.data;
   } catch {
    console.log('error');
  }
};

export const getMovieCast = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}/credits`, {
      params: { api_key: API_KEY }
    });
    return response.data.cast;
     } catch {
    console.log('error');
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}/reviews`, {
      params: { api_key: API_KEY }
    });
    return response.data.results;
     } catch {
    console.log('error');
  }
};