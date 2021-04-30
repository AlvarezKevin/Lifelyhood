import { NavLink as Link } from "react-router-dom";
import home from "../images/home.svg";

export default function Login() {
  return (
    <Link to="/">
      <img src={home} className="home" alt="logo" />
    </Link>
  );
}
