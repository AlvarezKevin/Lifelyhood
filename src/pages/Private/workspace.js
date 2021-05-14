import React from "react";
import jobapp from "../../images/work/jobapps.svg";
import meetings from "../../images/work/meetings.svg";
import ledger from "../../images/work/ledger.svg";
import presentations from "../../images/work/presentations.svg";
import tasks from "../../images/work/tasks.svg";
import add from "../../images/work/add.svg";
import ProfileNav from "../../components/ProfileNav";
import UserInfo from "../../components/UserInfo";
import "../../styles/Pages.css";
import SpaceItem from "./../../components/SpaceItem";
import PrivateLayout from "./../../Layout/Private";
const Workspace = () => {
  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem to="/jobapp" imgSrc={jobapp} title="Job Applications" />
          <SpaceItem to="/tasks" imgSrc={tasks} title="Tasks" />
          <SpaceItem to="/meetings" imgSrc={meetings} title="Meetings" />
          <SpaceItem to="/ledger" imgSrc={ledger} title="Ledger" />
          <SpaceItem
            to="/presentations"
            imgSrc={presentations}
            title="Presentations"
          />
          <SpaceItem to="/add-page" imgSrc={add} title="Add Page" />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Workspace;
