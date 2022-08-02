import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { searchMovies } from '../../services/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  
  const handleSubmit = value => {
    setSearchParams({ query: value });
  }; 
  
  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      searchMovies(query)
        .then(setMovies);
    }
  }, [searchParams]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </>
  );
};

export default Movies;