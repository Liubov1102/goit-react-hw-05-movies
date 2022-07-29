
import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  margin-bottom: 8px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid #ccc;
  cursor: pointer;

  :hover {
    color: orangered;
  }
`;