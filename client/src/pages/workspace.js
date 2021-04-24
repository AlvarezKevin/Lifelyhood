import React from "react";
import jobapp from "../images/work/jobapps.svg";
import meetings from "../images/work/meetings.svg";
import ledger from "../images/work/ledger.svg";
import presentations from "../images/work/presentations.svg";
import tasks from "../images/work/tasks.svg";
import add from "../images/work/add.svg";
import UserInfo from "../components/UserInfo";
import ProfileNav from "../components/ProfileNav";
import { Link } from "react-router-dom";

const Workspace = () => {
  return (
    <div className="profile">
        <ProfileNav />
        <div className="main">
            <UserInfo />
            <div className="pages">
                <Link><img src={jobapp} alt="Job Applications" /></Link> 
                <Link><img src={tasks} alt="Tasks" /></Link>
                <Link><img src={meetings} alt="Meetings" /></Link>
                <Link><img src={ledger} alt="Ledger" /></Link> 
                <Link><img src={presentations} alt="Presentations" /></Link>
                <Link><img src={add} alt="Add Page" /></Link>
            </div>  
        </div>  
    </div>
  );
};

export default Workspace;