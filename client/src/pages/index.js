import React from "react";
import logo from "../images/logo.svg";
import "../components/Navbar/style.css";
const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          style={{ marginTop: "30px" }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p style={{ paddingTop: "30px" }}>LIFE CONDENSED</p>
        <p style={{ paddingTop: "10px", fontSize: `calc(15px + 1vmin)` }}>
          THE TOOL THAT BRINGS ORDER TO YOUR CHAOTiC LIFE
        </p>
      </header>
      <div className="footer">
        <p>&#169;2021 LIFELYHOOD</p>
      </div>
    </div>
  );
};

export default Home;
