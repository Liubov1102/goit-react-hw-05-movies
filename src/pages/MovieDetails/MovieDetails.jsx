import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect} from 'react';
import { getMoviesById } from "../../services/api";
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetailsList } from 'components/MovieDetailsList/MovieDetailsList';
import { ActionInfo } from 'components/ActionInfo/ActionInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

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
      <ActionInfo />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;



