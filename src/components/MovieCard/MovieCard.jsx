import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledHeader,
  StyledImage,
  StyledInfo,
  StyledItem,
  StyledLink,
  StyledList,
  StyledMoreInfo,
  StyledMovieInfo,
  StyledName,
  StyledText,
} from './MovieCard.styled';
import { Loading } from 'components/Loading/Loading';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const releaseDate = new Date(release_date);
  const location = useLocation();
  console.log('location', location);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

  if (!title) {
    return <Loading />;
  }

  return (
    <>
      <StyledContainer>
        <StyledImage src={posterUrl} alt={`${title} poster`} />

        <StyledInfo>
          <StyledName>
            {title ?? 'Unknown'} ({releaseYear})
          </StyledName>
          <StyledText>User Score: {userScore}</StyledText>
          <StyledText>
            <StyledMovieInfo>Overview:</StyledMovieInfo> {overview}
          </StyledText>

          {genres && genres.length > 0 && (
            <StyledText>
              <StyledMovieInfo>Genres:</StyledMovieInfo>
              {genres.map(genre => genre.name).join(', ')}
            </StyledText>
          )}
        </StyledInfo>
      </StyledContainer>

      <StyledMoreInfo>
        <StyledHeader>Additional information</StyledHeader>

        <StyledList>
          <StyledItem>
            <StyledLink to="cast" state={location.state ?? '/'}>
              Cast
            </StyledLink>
          </StyledItem>

          <StyledItem>
            <StyledLink to="reviews" state={location.state ?? '/'}>
              Reviews
            </StyledLink>
          </StyledItem>
        </StyledList>
      </StyledMoreInfo>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
