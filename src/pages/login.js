import { Link } from "react-router-dom";
import home from "../images/home.svg";
import styled from "styled-components";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ email: "" });
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
    setUser({ email: "" });
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
          <FlexArticle>
            <div className="App">
              {user.email !== "" ? (
                <div className="welcome">
                  <h2>
                    Welcome, <span>{user.name}</span>
                  </h2>
                  <ButtonStyle onClick={Logout}>Logout</ButtonStyle>
                </div>
              ) : (
                <LoginForm Login={Login} error={error} />
              )}
            </div>
          </FlexArticle>
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
  padding: 0;
  box-sizing: border-box;
  font-size: 24px;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const FlexHeader = styled.header`
  background-color: white;
`;

const LogoNav = styled.img`
  display: flex;
  float: left;
  padding-top: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  width: 8vw;
  height: auto;
`;

const FlexMain = styled.main`
  margin: 0;
  display: flex;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const FlexArticle = styled.article` {
  background-color: white;
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const FlexFooter = styled.footer`
  background-color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 1rem 35rem;
  font-size: 1.2rem;
`;

const ButtonStyle = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-radius: 17px;
  padding-left: 7px;
  color: blue;
  background-color: black;
`;
