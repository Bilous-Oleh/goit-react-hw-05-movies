import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSection,
  StyledLink,
  StyledList,
  StyledItem,
  StyledTitle,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <StyledSection>
      <StyledTitle>Trending today</StyledTitle>

      <StyledList>
        {movies.map(movie => (
          <StyledItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </StyledSection>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
