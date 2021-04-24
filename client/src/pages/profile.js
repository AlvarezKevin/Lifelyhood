import React from "react";
import profile from "../images/profile/user/default.svg";
import work from "../images/profile/work.svg";
import school from "../images/profile/school.svg";
import personal from "../images/profile/personal.svg";
import ProfileNav from "../components/ProfileNav";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
        <ProfileNav />
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
