import {  Outlet , useLocation,} from 'react-router-dom';
import {  Suspense } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetailsList } from 'components/MovieDetailsList/MovieDetailsList';
import { AddInfo } from 'components/AddInfo/AddInfo';


const MovieDetails = () => {
  const location = useLocation();
  const goBack = location.state?.from ?? "/";

  return (
    <>
      <BackLink to={goBack}>Go Back</BackLink >

      <MovieDetailsList />
      
      <h4>Additional information</h4>
      <AddInfo />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;



