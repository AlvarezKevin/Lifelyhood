import React from "react";
import notes from "../images/school/notes.svg";
import schedule from "../images/school/schedule.svg";
import clubs from "../images/school/clubs.svg";
import exams from "../images/school/exams.svg";
import assign from "../images/school/assign.svg";
import add from "../images/school/add.svg";
import UserInfo from "../components/UserInfo";
import ProfileNav from "../components/ProfileNav";
import { Link } from "react-router-dom";

const Schoolspace = () => {
  return (
    <div className="profile">
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <Link>
            <img src={notes} alt="Notes" />
          </Link>
          <Link>
            <img src={schedule} alt="Schedule" />
          </Link>
          <Link>
            <img src={clubs} alt="Clubs" />
          </Link>
          <Link>
            <img src={exams} alt="Exams" />
          </Link>
          <Link>
            <img src={assign} alt="Assignments" />
          </Link>
          <Link>
            <img src={add} alt="Add Page" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schoolspace;
