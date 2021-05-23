import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  z-index: 10;
  padding: 0px 1rem;
  margin-bottom: 1rem;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.8rem;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #a7c38c;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-left: auto;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: ${(props) => (props.isNavOpen ? "unset" : "none")};
    flex-direction: column;
    padding: 1rem 0.5rem;
    position: absolute;
    right: 8px;
    top: 5%;
    box-shadow: 0px 12px 2rem 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-color: #fff;
  }
`;
export const VerticleLine = styled.div`
  height: 40%;
  width: 3px;
  margin: auto;
  background-color: #4a4a4a;
`;
export const HumburgerBtn = styled.div`
  height: 25px;
  width: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  margin-right: 4%;
  margin-top: auto;
  margin: auto 4% auto auto;
  display: none;

  & span {
    display: flex;
    width: 100%;
    height: 2px;
    background-color: #4a4a4a;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: flex;
  }
`;
export const LogoBtn = styled.div`
  /* border: 1px solid; */
  display: flex;
  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
