import React from "react";
import jobapp from "../../images/work/jobapps.svg";
import meetings from "../../images/work/meetings.svg";
import ledger from "../../images/work/ledger.svg";
import presentations from "../../images/work/presentations.svg";
import tasks from "../../images/work/tasks.svg";
import add from "../../images/work/add.svg";
import UserInfo from "../../components/UserInfo";
import ProfileNav from "../../components/ProfileNav";
import { Link } from "react-router-dom";

const Workspace = () => {
  return (
    <div className="profile">
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={jobapp} alt="Job Applications" />
              </Link>
              <h5>Job Applications</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={tasks} alt="Tasks" />
              </Link>
              <h5>Tasks</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={meetings} alt="Meetings" />
              </Link>
              <h5>Meetings</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={ledger} alt="Ledger" />
              </Link>
              <h5>Ledger</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={presentations} alt="Presentations" />
              </Link>
              <h5>Presentations</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
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

export default Workspace;
