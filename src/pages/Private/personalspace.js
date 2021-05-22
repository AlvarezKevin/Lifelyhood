import React from "react";
import fitness from "../../images/personal/fitness.svg";
import health from "../../images/personal/health.svg";
import grocery from "../../images/personal/grocery.svg";
import journal from "../../images/personal/journal.svg";
import travel from "../../images/personal/travel.svg";
import add from "../../images/personal/add.svg";

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
            to="/fitness-space"
            title="Fitness"
            imgSrc={fitness}
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            title="Health"
            imgSrc={health}
          />
          <SpaceItem
            colorClassName={color}
            to="/grocery-space"
            title="Grocery"
            imgSrc={grocery}
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            title="Journal"
            imgSrc={journal}
          />
          <SpaceItem
            colorClassName={color}
            to="/travel-space"
            title="Travel"
            imgSrc={travel}
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            title="Add Page"
            imgSrc={add}
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Personalspace;
