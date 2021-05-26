import React from "react";
import notes from "../../images/school/notes.svg";
import schedule from "../../images/school/schedule.svg";
import clubs from "../../images/school/clubs.svg";
import exams from "../../images/school/exams.svg";
import assign from "../../images/school/assign.svg";
import meetings from "../../images/work/meetings.svg";
import ProfileNav from "../../components/ProfileNav";
import UserInfo from "../../components/UserInfo";
import "../../styles/Pages.css";
import SpaceItem from "./../../components/SpaceItem";
import PrivateLayout from "./../../Layout/Private";
//The private directory has all private pages (including this file) that are accessible only to the authenticated users. All pages are wrapped inside the private layout.
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
            to="/todos"
            imgSrc={clubs}
            title="Todos"
          />
          <SpaceItem
            colorClassName={color}
            to="/links"
            imgSrc={meetings}
            title="Video Conference Links"
          />

          <SpaceItem
            colorClassName={color}
            to="/exams"
            imgSrc={exams}
            title="Exams"
          />
          <SpaceItem
            colorClassName={color}
            to="/calendar"
            imgSrc={schedule}
            title="Schedule"
          />
          <SpaceItem
            colorClassName={color}
            to="/assignments"
            imgSrc={assign}
            title="Assignments"
          />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Schoolspace;
