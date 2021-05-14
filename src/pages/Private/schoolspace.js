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
  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="main">
        <UserInfo />
        <div className="pages">
          <SpaceItem to="/editor" imgSrc={notes} title="Notes" />
          <SpaceItem to="/schedule" imgSrc={schedule} title="Schedule" />
          <SpaceItem to="/clubs" imgSrc={clubs} title="Clubs" />
          <SpaceItem to="/exams" imgSrc={exams} title="Exams" />
          <SpaceItem to="/assignments" imgSrc={assign} title="Assignments" />
          <SpaceItem to="/add-page" imgSrc={add} title="Add Page" />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Schoolspace;
