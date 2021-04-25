import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink style={{ textDecoration: "none" }} to="/about">
            About
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/contact-us">
            Contact Us
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            Log in
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/sign-up">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
