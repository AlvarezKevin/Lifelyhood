import React from "react";
import notes from "../images/school/notes.svg";
import schedule from "../images/school/schedule.svg";
import clubs from "../images/school/clubs.svg";
import exams from "../images/school/exams.svg";
import assign from "../images/school/assign.svg";
import add from "../images/add.svg";
import UserInfo from "../components/UserInfo";
import ProfileNav from "../components/ProfileNav";

const Schoolspace = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <UserInfo />
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