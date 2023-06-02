import axios from 'axios';

const URL = 'https://api.themoviedb.org';
const API_KEY = '7162f5765990623e356824720ea277df';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `${URL}/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `${URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const fetchMovieById = async movieId => {
  const { data } = await axios.get(
    `${URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${URL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
