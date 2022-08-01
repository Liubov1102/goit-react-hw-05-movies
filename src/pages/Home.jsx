import { useState, useEffect } from 'react';
import { trendingMovies } from 'services/api';
import { MovieList} from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    trendingMovies().then(setMovies);
  }, []);
  
  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;

