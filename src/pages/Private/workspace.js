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
  const color = "purple";
  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem
            colorClassName={color}
            to="/jobapp"
            imgSrc={jobapp}
            title="Job Applications"
          />
          <SpaceItem
            colorClassName={color}
            to="/tasks"
            imgSrc={tasks}
            title="Tasks"
          />
          <SpaceItem
            colorClassName={color}
            to="/meetings"
            imgSrc={meetings}
            title="Meetings"
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            imgSrc={ledger}
            title="Ledger"
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            imgSrc={presentations}
            title="Presentations"
          />
          <SpaceItem
            colorClassName={color}
            to="/editor"
            imgSrc={add}
            title="Add Page"
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Workspace;
