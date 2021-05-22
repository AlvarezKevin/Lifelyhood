import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 50;
  top: 85px;
  left: 1rem;
  background-color: #fff;
`;

export const NavLink = styled(Link)`
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
