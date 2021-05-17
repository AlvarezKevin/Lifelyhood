import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
`;

export const NavLink = styled(Link)`
    padding: 1rem;
`;


