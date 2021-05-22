import React, { useState, useRef } from "react";
import { NavLink as Link } from "react-router-dom";
import { Nav, NavMenu, HumburgerBtn, LogoBtn } from "./NavbarElements";
import useOnClickOutside from "../../Hooks/useOnClickOutside";
import home from "../../images/home.svg";
import { useAuthCtx } from "../../Hooks/useAuthContext";
import PrivateMenus from "./PrivateMenus";
import PublicMenus from "./PublicMenus";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuthCtx();
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
          {isAuthenticated ? <PrivateMenus logout={logout} /> : <PublicMenus />}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
