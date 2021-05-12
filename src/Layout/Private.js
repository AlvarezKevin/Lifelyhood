import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { useAuthCtx } from "../Hooks/useAuthContext";

const PrivateLayout = ({ children }) => {
  const { isAuthenticated } = useAuthCtx();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to access private pages");
      history.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <div
    //   style={{ minHeight: "100%", flexDirection: "column", display: "flex" }}
    >
      {isAuthenticated ? children : null}
    </div>
  );
};

export default PrivateLayout;
