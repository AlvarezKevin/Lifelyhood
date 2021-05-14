import React from "react";
import profile from "../../images/profile/user/default.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthCtx } from "../../Hooks/useAuthContext";

const UserInfo = () => {
  const { user } = useAuthCtx();
  let location = useLocation();
  let heading;
  if (location.pathname === "/work") {
    heading = "User's WorkSpace";
  } else if (location.pathname === "/school") {
    heading = "User's SchoolSpace";
  } else if (location.pathname === "/personal") {
    heading = "User's PersonalSpace";
  } else {
    heading = user.username || "Username";
  }

  return (
    <>
      <Link to="/profile">
        <img
          style={{ textAlign: "center" }}
          src={profile}
          alt="profile_image"
        />
      </Link>
      <p style={{ textAlign: "center" }}>{heading}</p>
    </>
  );
};

export default UserInfo;
