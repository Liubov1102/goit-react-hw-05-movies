import { useState, useEffect } from 'react';
import { trendingMovies } from '../../services/api';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    trendingMovies().then(setMovies);
  }, []);
  
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <StyledLink to={`movies/${id}`} state={{ from: location }} >
                {title}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;

