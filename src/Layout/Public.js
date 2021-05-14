import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useAuthCtx } from "../Hooks/useAuthContext";
import Navbar from "./../components/Navbar";

const PublicLayout = ({ children, isVisibleOnPrivate = false }) => {
  const { isAuthenticated } = useAuthCtx();
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated && !isVisibleOnPrivate) {
      history.push("/profile");
    }
  }, [isAuthenticated, isVisibleOnPrivate, history]);
  return (
    <div style={{ width: "100%", flexDirection: "column", display: "flex" }}>
      <Navbar />
      {children}
    </div>
  );
};

export default PublicLayout;
