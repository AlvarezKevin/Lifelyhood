import React from "react";
import notes from "../../images/school/notes.svg";
import schedule from "../../images/school/schedule.svg";
import clubs from "../../images/school/clubs.svg";
import exams from "../../images/school/exams.svg";
import assign from "../../images/school/assign.svg";
import add from "../../images/school/add.svg";
import UserInfo from "../../components/UserInfo";
import ProfileNav from "../../components/ProfileNav";
import { Link } from "react-router-dom";

const Schoolspace = () => {
  return (
    <div className="profile">
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <div className="page-box">
            <div className="page-title red">
              <Link to="/editor" className="page-img">
                <img src={notes} alt="Notes" />
              </Link>
              <h5>Notes</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title red">
              <Link className="page-img">
                <img src={schedule} alt="Schedule" />
              </Link>
              <h5>Schedule</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title red">
              <Link className="page-img">
                <img src={clubs} alt="Clubs" />
              </Link>
              <h5>Clubs</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title red">
              <Link className="page-img">
                <img src={exams} alt="Exams" />
              </Link>
              <h5>Exams</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title red">
              <Link className="page-img">
                <img src={assign} alt="Assignments" />
              </Link>
              <h5>Assignments</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title red">
              <Link to="/editor" className="page-img">
                <img src={add} alt="Add Page" />
              </Link>
              <h5>Add Page</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schoolspace;
