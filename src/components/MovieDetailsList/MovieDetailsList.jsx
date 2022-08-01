
import { Image, Label, OverviewText, Wrapper, Description, Title } from './MovieDetailsList.styled';

export const MovieDetailsList = ({ movie }) => {

  const { title, poster_path, vote_average, overview, genres } = movie;
  const movieGenres = genres.map(genre => genre.name).join(', ');

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


