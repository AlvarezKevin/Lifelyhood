import React from "react";
import notes from "../../images/school/notes.svg";
import schedule from "../../images/school/schedule.svg";
import clubs from "../../images/school/clubs.svg";
import exams from "../../images/school/exams.svg";
import assign from "../../images/school/assign.svg";
import add from "../../images/school/add.svg";
import ProfileNav from "../../components/ProfileNav";
import UserInfo from "../../components/UserInfo";
import "../../styles/Pages.css";
import SpaceItem from "./../../components/SpaceItem";
import PrivateLayout from "./../../Layout/Private";
const Schoolspace = () => {
  const color = "red";
  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem
            colorClassName={color}
            to="/editor"
            imgSrc={notes}
            title="Notes"
          />
          <SpaceItem
            colorClassName={color}
            to="/schedule"
            imgSrc={schedule}
            title="Schedule"
          />
          <SpaceItem
            colorClassName={color}
            to="/clubs"
            imgSrc={clubs}
            title="Clubs"
          />
          <SpaceItem
            colorClassName={color}
            to="/exams"
            imgSrc={exams}
            title="Exams"
          />
          <SpaceItem
            colorClassName={color}
            to="/assignments"
            imgSrc={assign}
            title="Assignments"
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

export default Schoolspace;
