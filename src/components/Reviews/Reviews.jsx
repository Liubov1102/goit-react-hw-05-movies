import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'services/api';
import {ReviewsTitle, ReviewsTexst} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews).catch()
  }, [movieId])

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              
              <div>
                <ReviewsTitle>Author: {author}</ReviewsTitle>
                <ReviewsTexst>{content}</ReviewsTexst>
              </div>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
