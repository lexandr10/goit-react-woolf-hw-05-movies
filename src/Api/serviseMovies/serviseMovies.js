import axios from 'axios';

const key = '34e3b0deca3ce8a0436969bd74179b6b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const getMovies = async () => {
  const res = await axios(`trending/movie/day?api_key=${key}&page=1`);
  return res.data;
};
export const getSearchMovies = async (query, page) => {
  const res = await axios(
    `search/movie?api_key=${key}&query=${query}&page=${page}`
  );
  return res.data;
};
export const getSingleMovie = async id => {
  const res = await axios(`movie/${id}?api_key=${key}`);
  return res.data;
};
export const getCastsMovie = async id => {
  const res = await axios(`movie/${id}/credits?api_key=${key}`);
  return res.data;
};
export const getReviews = async id => {
  const res = await axios(`movie/${id}/reviews?api_key=${key}`);
  return res.data;
};
