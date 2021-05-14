import React from "react";
import work from "../../images/profile/work.svg";
import school from "../../images/profile/school.svg";
import personal from "../../images/profile/personal.svg";
import ProfileNav from "../../components/ProfileNav";
import UserInfo from "../../components/UserInfo";
import "../../styles/Profile.css";

import SpaceItem from "./../../components/SpaceItem";
import PrivateLayout from "./../../Layout/Private";

const Profile = () => {
  return (
    <PrivateLayout>
      <div className="profile">
        <ProfileNav />
        <div className="main">
          <UserInfo />
          <div className="pages">
            <SpaceItem to="/work" alt="WorkSpace" imgSrc={work} />
            <SpaceItem to="/school" alt="WorkSpace" imgSrc={school} />
            <SpaceItem to="/personal" alt="WorkSpace" imgSrc={personal} />
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Profile;
