import React, { Component } from "react";
import { Nav, NavLink } from "./ProfileNavElements";
import calender from "../../images/profile/calender.svg";
import settings from "../../images/profile/settings.svg";
import Logout from "../../images/profile/logout.svg";
import red from "../../images/profile/red.svg";
import purple from "../../images/profile/purple.svg";
import blue from "../../images/profile/blue.svg";
import { useLocation } from 'react-router-dom'
import { logout } from "../login/LoginActions";

const ProfileNav = () => {
  let location = useLocation();
  let space1, space2;
  if (location.pathname ==="/work") {
    space1 = <NavLink to="/school"><img src={red} alt="nav_school" /></NavLink>;
    space2 = <NavLink to="/personal"><img src={blue} alt="nav_personal" /></NavLink>;
  } else if (location.pathname ==="/school") {
    space1 = <NavLink to="/work"><img src={purple} alt="nav_work" /></NavLink>;
    space2 = <NavLink to="/personal"><img src={blue} alt="nav_personal" /></NavLink>;
  } else if (location.pathname ==="/personal") {
    space1 = <NavLink to="/school"><img src={red} alt="nav_school" /></NavLink>;
    space2 = <NavLink to="/work"><img src={purple} alt="nav_work" /></NavLink>;
  }

  return (
    <>
        <Nav>
            <NavLink to="/"><img src={Logout} alt="log out" /></NavLink>
            <NavLink to="/"><img src={settings} alt="settings" /></NavLink>
            <NavLink to="/"><img src={calender} alt="calender" /></NavLink>
            {space1}
            {space2}
        </Nav>
    </>
  );
};

export default ProfileNav;
