import React from "react";
import fitness from "../images/personal/fitness.svg";
import health from "../images/personal/health.svg";
import grocery from "../images/personal/grocery.svg";
import journal from "../images/personal/journal.svg";
import travel from "../images/personal/travel.svg";
import add from "../images/add.svg";
import profile from "../images/profile/user/default.svg";
import ProfileNav from "../components/ProfileNav";

const Personalspace = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <img className="user_info" src={profile} alt="profile_image"/>
            <p className="user_info">User's PersonalSpace</p>
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