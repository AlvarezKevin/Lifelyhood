import React from "react";
import jobapp from "../images/Work/jobapps.svg";
import meetings from "../images/Work/meetings.svg";
import ledger from "../images/Work/ledger.svg";
import presentations from "../images/Work/presentations.svg";
import tasks from "../images/Work/tasks.svg";
import add from "../images/Work/add.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
import red from "../images/red.svg";
import blue from "../images/blue.svg";
import profile from "../images/profile.svg";
import { Link } from "react-router-dom";

const Workspace = () => {
  return (
    <div className="profile">
        <div className="nav">
            <Link to="/school" className="link"><img src={settings} alt="settings" /></Link>
            <Link to="/personal" className="link"><img src={calender} alt="calender" /></Link>
            <Link to="/school" className="link"><img src={red} alt="nav_school" /></Link>
            <Link to="/personal" className="link"><img src={blue} alt="nav_personal" /></Link>
        </div>
        <p className="logout"> Log out </p> 
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's WorkSpace</p>
            <div className="pages">
                <button><img src={jobapp} alt="Job Applications" /></button> 
                <button><img src={tasks} alt="Tasks" /></button>
                <button><img src={meetings} alt="Meetings" /></button>
                <button><img src={ledger} alt="Ledger" /></button> 
                <button><img src={presentations} alt="Presentations" /></button>
                <button><img src={add} alt="Add Page" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Workspace;