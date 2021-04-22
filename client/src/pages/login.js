import "../styles/Login.css";
import {NavLink as Link} from "react-router-dom";
import home from "../images/home.svg";

export default function Login() {
  return (
    <div className="Login">
      <Link to="/">
        <img
          src={home}
          className="home"
          alt="logo"
        />
      </Link>
    </div>
  );
}