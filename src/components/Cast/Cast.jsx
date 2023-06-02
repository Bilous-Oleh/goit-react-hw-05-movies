import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/Api';
import {
  StyledInfo,
  StyledItem,
  StyledList,
  StyledName,
  StyledText,
} from './Cast.styled';
import { Loading } from 'components/Loading/Loading';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);

      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : cast.length > 0 ? (
        <StyledList>
          {cast.map(actor => (
            <StyledItem key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}

              <StyledInfo>
                <StyledName>{actor.name}</StyledName>
                <p>Character: {actor.character}</p>
              </StyledInfo>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <StyledText>We don't have any information</StyledText>
      )}
    </>
  );
};

export default Cast;
