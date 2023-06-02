import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/Api';
import {
  StyledAuthor,
  StyledItem,
  StyledList,
  StyledReview,
  StyledText,
} from './Reviews.styled';
import { Loading } from 'components/Loading/Loading';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : reviews.length > 0 ? (
        <StyledList>
          {reviews.map(review => (
            <StyledItem key={review.id}>
              <StyledAuthor>Author: {review.author}</StyledAuthor>
              <StyledReview>{review.content}</StyledReview>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <StyledText>We don't have any reviews</StyledText>
      )}
    </>
  );
};

export default Reviews;
