import React, { useState, useRef } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavMenu,
  VerticleLine,
  HumburgerBtn,
  LogoBtn,
} from "./NavbarElements";
import useOnClickOutside from "../../Hooks/useOnClickOutside";
import home from "../../images/home.svg";
const Navbar = () => {
  const navMenuRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggler = () => setIsNavOpen(!isNavOpen);

  useOnClickOutside(navMenuRef, () => setIsNavOpen(false));
  return (
    <>
      <Nav>
        <LogoBtn>
          <Link to="/">
            <img src={home} alt="logo" />
          </Link>
        </LogoBtn>
        <HumburgerBtn onClick={navToggler}>
          <span />
          <span />
          <span />
        </HumburgerBtn>
        <NavMenu isNavOpen={isNavOpen} ref={navMenuRef}>
          <NavLink style={{ textDecoration: "none" }} to="/about">
            About
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/contact-us">
            Contact Us
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            Log in
          </NavLink>
          <VerticleLine />
          <NavLink style={{ textDecoration: "none" }} to="/sign-up">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
