import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/api';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews)
  }, [movieId])

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
