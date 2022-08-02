import { useLocation, NavLink } from 'react-router-dom';

export const ActionInfo = () => {
  const location = useLocation();
  return (
    <ul>
      <li>
        <NavLink to="cast" state={{ from: location.state.from }}>Cast</NavLink>
      </li>
      <li>
        <NavLink to="reviews" state={{ from: location.state.from }}>Reviews</NavLink>
      </li>
    </ul>
  )
};
