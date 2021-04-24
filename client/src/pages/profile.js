import React from "react";
import work from "../images/profile/work.svg";
import school from "../images/profile/school.svg";
import personal from "../images/profile/personal.svg";
import ProfileNav from "../components/ProfileNav";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <UserInfo />
            <div className="spaces">
                <Link to="/work"><img src={work} alt="WorkSpace" /></Link> 
                <Link to="/school"><img src={school} alt="SchoolSpace" /></Link>
                <Link to="/personal"><img src={personal} alt="PersonalSpace" /></Link>
            </div>  
        </div>  
    </div>
  );
};

export default Profile;
