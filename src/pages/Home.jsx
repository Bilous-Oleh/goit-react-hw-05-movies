import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { fetchTrendMovies } from 'services/Api';
import { Loading } from 'components/Loading/Loading';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const { results } = await fetchTrendMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && error && <p>Oops! Try later.</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
