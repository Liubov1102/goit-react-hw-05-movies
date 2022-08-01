import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect} from 'react';
import { getMoviesById } from "../../services/api";
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetailsList } from 'components/MovieDetailsList/MovieDetailsList';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/movies';

  useEffect(() => {
    getMoviesById(movieId).then(setMovie);
  }
    , [movieId]);
  if (!movie) {
    return;
  }

  return (
    <>
      <BackLink to={goBack}>Go Back</BackLink >

      <MovieDetailsList movie={movie} />
      
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast" state={{ id: movieId, from: goBack }}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ id: movieId, from: goBack }}>Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;



