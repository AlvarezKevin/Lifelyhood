import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  padding-left: 30rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  float: left;
  text-align: center;
  text-decoration: none;
  font-size: 29px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  float: right;
`;
