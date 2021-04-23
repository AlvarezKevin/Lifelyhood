import React from "react";
import fitness from "../images/Personal/fitness.svg";
import health from "../images/Personal/health.svg";
import grocery from "../images/Personal/grocery.svg";
import journal from "../images/Personal/journal.svg";
import travel from "../images/Personal/travel.svg";
import add from "../images/Personal/add.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
import red from "../images/red.svg";
import purple from "../images/purple.svg";
import profile from "../images/profile.svg";
import {Link} from "react-router-dom"

const Personalspace = () => {
  return (
    <div className="profile">
        <div className="nav">
          <Link to="/school" className="link"><img src={settings} alt="settings" /></Link>
          <Link to="/personal" className="link"><img src={calender} alt="calender" /></Link>
          <Link to="/school" className="link"><img src={red} alt="nav_school" /></Link>
          <Link to="/work" className="link"><img src={purple} alt="nav_work" /></Link>
        </div>
        <p className="logout"> Log out </p> 
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's Profile</p>
            <div className="pages">
                <button><img src={fitness} alt="Fitness" /></button> 
                <button><img src={health} alt="Health" /></button>
                <button><img src={grocery} alt="Grocery" /></button>
                <button><img src={journal} alt="Journal" /></button> 
                <button><img src={travel} alt="Travel" /></button>
                <button><img src={add} alt="Add Page" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Personalspace;