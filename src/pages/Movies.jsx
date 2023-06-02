import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovieByName } from '../services/Api';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import {
  StyledList,
  StyledItem,
  StyledLink,
  StyledSection,
  StyledTitle,
} from '../components/MovieList/MovieList.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovies = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No any match found', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }

        setSearchResults(results);
      } catch (error) {
        toast.error(error.message);
        setSearchResults([]);
      }
    };

    getMovies();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <StyledSection>
        <StyledTitle>Movies Page</StyledTitle>

        <SearchMovies onSubmit={handleSubmit} />

        <StyledList>
          {searchResults.map(movie => (
            <StyledItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </StyledLink>
            </StyledItem>
          ))}
        </StyledList>
      </StyledSection>
      <ToastContainer autoClose="2000" />
    </main>
  );
};

export default Movies;
