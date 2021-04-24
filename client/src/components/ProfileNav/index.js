import React from "react";
import { Nav, NavLink } from "./ProfileNavElements";
import calender from "../../images/profile/calender.svg";
import settings from "../../images/profile/settings.svg";
import logout from "../../images/profile/logout.svg";
import red from "../../images/profile/red.svg";
import purple from "../../images/profile/purple.svg";
import blue from "../../images/profile/blue.svg";
import { useLocation } from 'react-router-dom'

const ProfileNav = () => {
  let location = useLocation();

  return (
    <>
        <Nav>
            <NavLink to="/"><img src={logout} alt="log out" /></NavLink>
            <NavLink to="/"><img src={settings} alt="settings" /></NavLink>
            <NavLink to="/"><img src={calender} alt="calender" /></NavLink>
            {location.pathname !=="/profile" &&
              <div>
                <NavLink to="/school"><img src={red} alt="nav_school" /></NavLink>
                <NavLink to="/work"><img src={purple} alt="nav_work" /></NavLink>
                <NavLink to="/personal"><img src={blue} alt="nav_personal" /></NavLink>
              </div>
            }
        </Nav>
    </>
  );
};

export default ProfileNav;
