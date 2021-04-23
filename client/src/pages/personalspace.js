import React from "react";
import jobapp from "../images/Workspace/JobApp.svg";
import meetings from "../images/Workspace/Meetings.svg";
import ledger from "../images/Workspace/Ledger.svg";
import presentations from "../images/Workspace/Presentations.svg";
import tasks from "../images/Workspace/Tasks.svg";
import add from "../images/Workspace/AddPage.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
import red from "../images/red.svg";
import purple from "../images/purple.svg";
import profile from "../images/profile.svg";

const Personalspace = () => {
  return (
    <div className="profile">
        <div className="nav">
            <button><img src={settings} alt="settings" /></button>
            <button><img src={calender} alt="calender" /></button>
            <button><img src={red} alt="nav_school" /></button>
            <button><img src={purple} alt="nav_personal" /></button>
        </div>
        <p className="logout"> Log out </p> 
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's Profile</p>
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

export default Personalspace;