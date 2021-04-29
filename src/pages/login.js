import { Link } from "react-router-dom";
import home from "../images/home.svg";
import styled from "styled-components";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  // Admin detail (it will be changed once we plug database to frontend)
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details don't match");
      setError("Details don't match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <>
      <UniveralDiv>
        <FlexHeader>
          <Link to="/">
            <LogoNav src={home} alt="logo" />
          </Link>
        </FlexHeader>
        <FlexMain>
          <FlexNav></FlexNav>
          <FlexArticle>
            <div>MAIN CONTENT</div>
            <div className="App">
              {user.email !== "" ? (
                <div className="welcome">
                  <h2>
                    Welcome, <span>{user.name}</span>
                  </h2>
                  <button onClick={Logout}>Logout</button>
                </div>
              ) : (
                <LoginForm Login={Login} error={error} />
              )}
            </div>
          </FlexArticle>
          <FlexAside></FlexAside>
        </FlexMain>
        <FlexFooter>
          By clicking “Log in” above, you acknowledge that you have read and
          understood, and agree to Lifelyhood's Terms & Conditions.
        </FlexFooter>
      </UniveralDiv>
    </>
  );
}

// Style
const UniveralDiv = styled.div`
  margin: 2px;
  font-size: 24px;
  color: black;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 600px) {
    .flex-main {
      flex-direction: column;
    }
  }
`;

const FlexHeader = styled.header`
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const LogoNav = styled.img`
  display: flex;
  float: left;
  padding: 2rem;
  cursor: pointer;
`;

const FlexMain = styled.main`
  display: flex;
  flex: 1;
`;

const FlexNav = styled.nav`
  background-color: black;
  padding-top: 3rem;
  flex: 1 1 5rem;
`;

const FlexArticle = styled.article` {
  background-color: white;
  padding-top: 3rem;
  flex: 3 3;
  `;

const FlexAside = styled.aside`
  background-color: black;
  padding-top: 3rem;
  flex: 1 1 5rem;
`;

const FlexFooter = styled.footer`
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
