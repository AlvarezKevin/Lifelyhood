import React from "react";
import Navbar from "./../components/Navbar";

const PublicLayout = ({ children }) => {
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
