import React from "react";
import fitness from "../images/personal/fitness.svg";
import health from "../images/personal/health.svg";
import grocery from "../images/personal/grocery.svg";
import journal from "../images/personal/journal.svg";
import travel from "../images/personal/travel.svg";
import add from "../images/personal/add.svg";
import ProfileNav from "../components/ProfileNav";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";

const Personalspace = () => {
  return (
    <div className="profile">
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <Link>
            <img src={fitness} alt="Fitness" />
          </Link>
          <Link>
            <img src={health} alt="Health" />
          </Link>
          <Link>
            <img src={grocery} alt="Grocery" />
          </Link>
          <Link>
            <img src={journal} alt="Journal" />
          </Link>
          <Link>
            <img src={travel} alt="Travel" />
          </Link>
          <Link>
            <img src={add} alt="Add Page" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personalspace;
