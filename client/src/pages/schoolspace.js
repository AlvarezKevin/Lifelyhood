import React from "react";
import notes from "../images/School/notes.svg";
import schedule from "../images/School/schedule.svg";
import clubs from "../images/School/clubs.svg";
import exams from "../images/School/exams.svg";
import assign from "../images/School/assign.svg";
import add from "../images/School/add.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
import purple from "../images/purple.svg";
import blue from "../images/blue.svg";
import profile from "../images/profile.svg";
import {Link} from "react-router-dom"

const Schoolspace = () => {
  return (
    <div className="profile">
        <div className="nav">
          <Link to="/school" className="link"><img src={settings} alt="settings" /></Link>
          <Link to="/personal" className="link"><img src={calender} alt="calender" /></Link>
          <Link to="/personal" className="link"><img src={blue} alt="nav_personal" /></Link>
          <Link to="/work" className="link"><img src={purple} alt="nav_work" /></Link>
        </div>
        <p className="logout"> Log out </p> 
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's Profile</p>
            <div className="pages">
                <button><img src={notes} alt="Notes" /></button> 
                <button><img src={schedule} alt="Schedule" /></button>
                <button><img src={clubs} alt="Clubs" /></button>
                <button><img src={exams} alt="Exams" /></button> 
                <button><img src={assign} alt="Assignments" /></button>
                <button><img src={add} alt="Add Page" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Schoolspace;