import React from "react";
import { VerticleLine, NavLink } from "./NavbarElements";

const PrivateMenus = ({ logout }) => {
  return (
    <>
      <NavLink style={{ textDecoration: "none" }} to="/about">
        About
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/contact-us">
        Contact Us
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} to="/profile">
        Profile
      </NavLink>
      <VerticleLine />
      <NavLink style={{ textDecoration: "none" }} to="#logout" onClick={logout}>
        Logout
      </NavLink>
    </>
  );
};

export default PrivateMenus;
