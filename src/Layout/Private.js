import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import ProfileNav from "../components/ProfileNav";
import { useAuthCtx } from "../Hooks/useAuthContext";
import Navbar from "./../components/Navbar";
// The private layout has all the authenticated pages. It has the useEffect function to check if the user is logged in and show the user the profile page otherwise it redirects the user to the login page.
const PrivateLayout = ({ children, title }) => {
  const { isAuthenticated } = useAuthCtx();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to access private pages");
      history.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <div style={{ width: "100%", flexDirection: "column", display: "flex" }}>
      <Navbar />
      <ProfileNav />
      {title && (
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>{title}</h3>
      )}
      {isAuthenticated ? children : null}
    </div>
  );
};

export default PrivateLayout;
