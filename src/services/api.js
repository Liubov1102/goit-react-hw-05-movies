import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import { API_KEY } from 'constants/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const trendingMovies = async () => {
  try {
    const response = await customAxios.get(`trending/movie/day` )
    return response.data.results;
  } catch {
     toast.error('error');
  }
};

export const searchMovies = async (query) => {
  try {
      const response = await customAxios.get(`search/movie`, {
      params: { query: query}
    });
    return response.data.results;
   } catch {
    toast.error('error');
  }
};

export const getMoviesById = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}`);
    return response.data;
   } catch {
    toast.error('error');
  }
};

export const getMovieCast = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}/credits`);
    return response.data.cast;
     } catch {
    toast.error('error');
  }
};

export const getMovieReviews = async (id) => {
  try {
    const response = await customAxios.get(`movie/${id}/reviews`);
    return response.data.results;
  } catch {
    toast.error('error');
  }
};