import { NavLink as Link } from "react-router-dom";
import home from "../images/home.svg";
import pic from "../images/manage.png";
import "../styles/About.css";

export default function Login() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <Link to="/">
            <img src={home} className="home" alt="logo" />
          </Link>
        </div>

        <div className="container">
          <div>
            <h1><b>About Lifelyhood</b></h1>
            <h2><b>Lifelyhood for Everyone</b></h2>
          </div>
          <img src={pic} alt="Stress free" />
          <div className="modo">
            <p>
              Enough workspaces to keep all your notes, projects, and work organized.
            </p>
          </div>
          <div className="info">
            <p>Work smater, not harder</p>
          </div>
          <div className="team">
            <h2>Our Creators</h2>
            

          </div>
          <footer>
            <p>&#169;2021 LIFELYHOOD</p>
          </footer>
        </div>
      </div>
    </div>
  );
}