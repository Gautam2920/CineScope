import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, type = '', year = '') => {
    const params = { s: query, apikey: API_KEY };
    if (type) params.type = type;
    if (year) params.y = year;

    const response = await axios.get(BASE_URL, { params });
    if (response.data.Response === 'True') return response.data;
    throw new Error(response.data.Error || 'No results found');
};

export const getMovieDetails = async (imdbID) => {
    const params = { i: imdbID, apikey: API_KEY, plot: 'full' };
    const response = await axios.get(BASE_URL, { params });
    if (response.data.Response === 'True') return response.data;
    throw new Error(response.data.Error || 'Movie not found');
};
