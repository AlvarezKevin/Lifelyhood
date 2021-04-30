import { Link } from "react-router-dom";
import home from "../images/home.svg";
import { useState } from "react";
import LoginForm from "./LoginForm";
import {
  Home,
  FlexHeader,
  LogoNav,
  FlexMain,
  FlexArticle,
  FlexFooter,
  ButtonStyle,
} from "../styles/LoginAndSignUpStyle";

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
      setError("Invalid Email or Password.");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ email: "" });
  };

  return (
    <>
      <Home>
        <FlexHeader>
          <Link to="/">
            <LogoNav src={home} alt="logo" />
          </Link>
        </FlexHeader>
        <FlexMain>
          <FlexArticle>
            {user.email !== "" ? (
              <>
                <h1>Hello</h1>
              </>
            ) : (
              <LoginForm Login={Login} error={error} />
            )}
          </FlexArticle>
        </FlexMain>
        <FlexFooter>
          By clicking “Log in” above, you acknowledge that you have read and
          understood, and agree to Lifelyhood's Terms & Conditions.
        </FlexFooter>
      </Home>
    </>
  );
}
