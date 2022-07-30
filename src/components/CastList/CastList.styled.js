import styled from "styled-components";

export const Img = styled.img`
    display: block;
    max-width: 50%;
    height: auto;    
`;

export const List = styled.ul`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    width: 950px;     
    `;

export const CastItem = styled.li`
    max-width: 280px;
    display: flex;
    flex-direction: column ;    
    margin-right: 16px;
    margin-bottom: 16px;
    list-style: none;
     > p{
        margin: 4px;
     }
`;