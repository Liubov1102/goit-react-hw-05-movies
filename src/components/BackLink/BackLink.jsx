import { HiChevronDoubleLeft } from "react-icons/hi";
import { StyledLink } from 'components/BackLink/BackLink.styled';

export const BackLink = ({ to, children }) => {
    return (
        <StyledLink to={to}>
            <HiChevronDoubleLeft size="24" />
            {children}
        </StyledLink>
    );
};

