import React from "react";
import { Nav, NavLink } from "./ProfileNavElements";
import calender from "../../images/profile/calender.svg";
import settings from "../../images/profile/settings.svg";
import logout from "../../images/profile/logout.svg";
import red from "../../images/profile/red.svg";
import purple from "../../images/profile/purple.svg";
import blue from "../../images/profile/blue.svg";

const ProfileNav = () => {
  return (
    <>
        <Nav>
            <NavLink to="/"><img src={logout} alt="log out" /></NavLink>
            <NavLink><img src={settings} alt="settings" /></NavLink>
            <NavLink><img src={calender} alt="calender" /></NavLink>
            {/*do not show links in home page*/}
            <NavLink to="/school"><img src={red} alt="nav_school" /></NavLink>
            <NavLink to="/work"><img src={purple} alt="nav_work" /></NavLink>
            <NavLink to="/personal"><img src={blue} alt="nav_personal" /></NavLink>
        </Nav>
    </>
  );
};

export default ProfileNav;
