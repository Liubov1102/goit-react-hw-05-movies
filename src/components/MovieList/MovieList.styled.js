import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
        color: orangered;
    }
`;