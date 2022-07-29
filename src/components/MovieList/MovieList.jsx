import { useLocation } from 'react-router-dom';
import { StyledLink } from 'components/MovieList/MovieList.styled';

export const MovieList = ({ movies }) => {
    
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <StyledLink to={`${id}`} state={{ from: location }} >
              {title}
            </StyledLink>
          </li>
        );
      })}
    </ul>
  )
};
