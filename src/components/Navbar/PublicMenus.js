import React from "react";
import { VerticleLine, NavLink } from "./NavbarElements";
const PublicMenus = () => {
  return (
    <>
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
    </>
  );
};

export default PublicMenus;
