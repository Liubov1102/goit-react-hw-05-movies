import { useState, useEffect} from 'react';
import {  useParams} from 'react-router-dom';
import { getMoviesById } from "../../services/api";
import { Image, Label, OverviewText, Wrapper, Description, Title } from './MovieDetailsList.styled';

const INIT_STATE = {
  title: '',
  poster_path: '',
  vote_average: '',
  overview: '',
  genres: [],
};  

export const MovieDetailsList = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(INIT_STATE);
  const { title, poster_path, vote_average, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');

  useEffect(() => {
    getMoviesById(movieId).then(setMovie);
  }
    , [movieId]);

  return (
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
  )
};

