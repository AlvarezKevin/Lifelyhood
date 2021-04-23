import React from "react";
import profile from "../images/profile.svg";
import work from "../images/work.svg";
import school from "../images/school.svg";
import personal from "../images/personal.svg";
import calender from "../images/calender.svg";
import settings from "../images/settings.svg";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
        <div className="nav">
            <button><img src={settings} alt="settings" /></button>
            <button><img src={calender} alt="calender" /></button>
        </div>
        <p className="logout"> Log out </p>
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's Profile</p>
            <div className="spaces">
                <button><img src={work} alt="WorkSpace" /></button> 
                <button><img src={school} alt="SchoolSpace" /></button>
                <button><img src={personal} alt="PersonalSpace" /></button>
            </div>  
        </div>  
    </div>
  );
};

export default Profile;
