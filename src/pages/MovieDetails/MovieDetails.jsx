import { NavLink, Outlet , useParams, useLocation,} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { BackLink } from '../../components/BackLink/BackLink';
import {Image, Label, OverviewText, Wrapper, Description, Title} from './MovieDetails.styled';
import { getMoviesById } from "../../services/api";

const INIT_STATE = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
};  

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(INIT_STATE);
  const { title, poster_path, vote_average, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');
  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    getMoviesById(movieId).then(setMovie);
  }
    , [movieId]);
  
  return (
    <>
      <BackLink to={goBack}>Go Back</BackLink >
      <Wrapper>
        <Image src={poster_path ?
          `https://image.tmdb.org/t/p/w300${poster_path}`
          : 'https://i.ibb.co/dJhXHZt/filmoteka.png'} alt={title}
        />
        <Description>
          <Title>{title}</Title>
          <Label>User score: {Math.round(vote_average * 10)} %</Label>
          <Label>Overview</Label>
          <OverviewText>{overview}</OverviewText>
          <Label>Genres</Label>
          <p>{movieGenres}</p>
        </Description>
      </Wrapper>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
       
    </>
  );
};

export default MovieDetails;



