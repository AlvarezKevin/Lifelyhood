import React from "react";
import fitness from "../../images/personal/fitness.svg";
import health from "../../images/personal/health.svg";
import grocery from "../../images/personal/grocery.svg";
import journal from "../../images/personal/journal.svg";
import travel from "../../images/personal/travel.svg";
import add from "../../images/personal/add.svg";
import ProfileNav from "../../components/ProfileNav";
import UserInfo from "../../components/UserInfo";
import "../../styles/Pages.css";
import { Link } from "react-router-dom";

const Personalspace = () => {
  return (
    <div className="profile">
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={fitness} alt="Fitness" />
              </Link>
              <h5>Fitness</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={health} alt="Health" />
              </Link>
              <h5>Health</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={grocery} alt="Grocery" />
              </Link>
              <h5>Grocery</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={journal} alt="Journal" />
              </Link>
              <h5>Journal</h5>
            </div>
          </div>

          <div className="page-box">
            <div className="page-title">
              <Link className="page-img">
                <img src={travel} alt="Travel" />
              </Link>
              <h5>Travel</h5>
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

export default Personalspace;
