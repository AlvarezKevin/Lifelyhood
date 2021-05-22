import React from "react";
import logo from "../images/logo.svg";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Home = () => {
  return (
    <App>
      <Navbar />
      <AppHeader>
        <AppLogo style={{ marginTop: "30px" }} src={logo} alt="logo" />
        <p style={{ paddingTop: "30px" }}>LIFE CONDENSED</p>
        <p style={{ paddingTop: "10px", fontSize: `calc(15px + 1vmin)` }}>
          THE TOOL THAT BRINGS ORDER TO YOUR CHAOTiC LIFE
        </p>
      </AppHeader>
      <Footer>
        <p>&#169;2021 LIFELYHOOD</p>
      </Footer>
    </App>
  );
};

export default Home;

// Style
const App = styled.div`
  text-align: center;
  text-decoration: none;
  width: 100%;
`;
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;
const AppHeader = styled.header`
  background-color: #fff;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(40px + 1vmin);
  color: black;
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: white;
  font-size: calc(10px + 1vmin);
`;
