import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useAuthCtx } from "../Hooks/useAuthContext";
import Navbar from "./../components/Navbar";

const PublicLayout = ({ children }) => {
  const { isAuthenticated } = useAuthCtx();
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/profile");
    }
  }, [isAuthenticated]);
  return (
    <div
      style={{ minHeight: "100%", flexDirection: "column", display: "flex" }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default PublicLayout;
