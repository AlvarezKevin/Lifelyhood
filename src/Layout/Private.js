import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import ProfileNav from "../components/ProfileNav";
import { useAuthCtx } from "../Hooks/useAuthContext";
import Navbar from "./../components/Navbar";
const PrivateLayout = ({ children }) => {
  const { isAuthenticated } = useAuthCtx();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to access private pages");
      history.push("/login");
    }
  }, [isAuthenticated, history]);

  return (
    <div style={{ width: "100%", flexDirection: "column", display: "flex" }}>
      <Navbar />
      <ProfileNav />
      {isAuthenticated ? children : null}
    </div>
  );
};

export default PrivateLayout;