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
  return (
    <PrivateLayout>
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem to="/fitness-space" title="Fitness" imgSrc={fitness} />
          <SpaceItem to="/health-space" title="Health" imgSrc={health} />
          <SpaceItem to="/grocery-space" title="Grocery" imgSrc={grocery} />
          <SpaceItem to="/journal-space" title="Journal" imgSrc={journal} />
          <SpaceItem to="/travel-space" title="Travel" imgSrc={travel} />
          <SpaceItem to="/add-space" title="Add Page" imgSrc={add} />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Personalspace;
