import React from "react";
import { Nav, NavLink } from "./ProfileNavElements";
import calender from "../../images/profile/calender.svg";
import settings from "../../images/profile/settings.svg";
import red from "../../images/profile/red.svg";
import purple from "../../images/profile/purple.svg";
import blue from "../../images/profile/blue.svg";
import { useLocation } from "react-router-dom";

const ProfileNav = () => {
  let location = useLocation();
  let space1, space2, space3;
  if (location.pathname === "/work") {
    space1 = (
      <NavLink to="/school">
        <img src={red} alt="nav_school" />
      </NavLink>
    );
    space2 = (
      <NavLink to="/personal">
        <img src={blue} alt="nav_personal" />
      </NavLink>
    );
  } else if (location.pathname === "/school") {
    space1 = (
      <NavLink to="/work">
        <img src={purple} alt="nav_work" />
      </NavLink>
    );
    space2 = (
      <NavLink to="/personal">
        <img src={blue} alt="nav_personal" />
      </NavLink>
    );
  } else if (location.pathname === "/personal") {
    space1 = (
      <NavLink to="/school">
        <img src={red} alt="nav_school" />
      </NavLink>
    );
    space2 = (
      <NavLink to="/work">
        <img src={purple} alt="nav_work" />
      </NavLink>
    );
  } else if (location.pathname === "/calendar") {
    space1 = (
      <NavLink to="/school">
        <img src={red} alt="nav_school" />
      </NavLink>
    );
    space2 = (
      <NavLink to="/work">
        <img src={purple} alt="nav_work" />
      </NavLink>
    );
    space3 = (
      <NavLink to="/personal">
        <img src={blue} alt="nav_personal" />
      </NavLink>
    );
  }


  return (
    <>
      <Nav>
        <NavLink to="/setting">
          <img src={settings} alt="settings" />
        </NavLink>
        <NavLink to="/calendar">
          <img src={calender} alt="calender" />
        </NavLink>
        {space1}
        {space2}
        {space3}
      </Nav>
    </>
  );
};

export default ProfileNav;
