import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { fetchMovieById } from '../services/Api';
import MovieCard from '../components/MovieCard/MovieCard';
import { StyledButton, StyledContainer } from './MovieDelails.styled';
import { Loading } from 'components/Loading/Loading';

const MovieDelails = () => {
  const { movieId } = useParams();
  // const location = useLocation();
  const locationDetails = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('locationDetails', locationDetails);

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <StyledContainer>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <Link to={locationDetails.state ?? '/'}>
              <StyledButton type="button">Back</StyledButton>
            </Link>

            {selectedMovie && <MovieCard movie={selectedMovie} />}

            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </StyledContainer>
    </main>
  );
};

export default MovieDelails;
