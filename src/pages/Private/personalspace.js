import React from "react";
import fitness from "../../images/personal/fitness.svg";
import health from "../../images/personal/health.svg";
import grocery from "../../images/personal/grocery.svg";
import journal from "../../images/personal/journal.svg";
import travel from "../../images/personal/travel.svg";
import schedule from "../../images/school/schedule.svg";
import UserInfo from "../../components/UserInfo";
import "../../styles/Pages.css";
import SpaceItem from "./../../components/SpaceItem";
import PrivateLayout from "./../../Layout/Private";
const Personalspace = () => {
  const color = "blue";
  return (
    <PrivateLayout>
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem
            colorClassName={color}
            to="/fitness"
            title="Fitness"
            imgSrc={fitness}
          />
          <SpaceItem
            colorClassName={color}
            to="/grocery"
            title="Grocery"
            imgSrc={grocery}
          />
          <SpaceItem
            colorClassName={color}
            to="/health"
            title="Health"
            imgSrc={health}
          />
          <SpaceItem
            colorClassName={color}
            to="/journal"
            title="Journal"
            imgSrc={journal}
          />
          <SpaceItem
            colorClassName={color}
            to="/travel"
            title="Travel"
            imgSrc={travel}
          />
          <SpaceItem
            colorClassName={color}
            to="/calendar"
            title="Schedule"
            imgSrc={schedule}
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Personalspace;
