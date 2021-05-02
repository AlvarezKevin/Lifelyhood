import { NavLink as Link } from "react-router-dom";
import home from "../images/home.svg";

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
          
          <h1><b>Contact Us</b></h1>
          <h2><b>Get Support</b></h2>
          <div>
            <p>
            If you’re having trouble with Lifelyhood, get assistance from other Lifelyhood users or call us at +1 (888) 431 6051.
            </p>
          </div>
          <div className="address">
            <h2><b>Lifelyhood Office</b></h2>
            <h3>New York, United States</h3>
            <p>Lifelyhood Corporation</p>
            <p> 151 W 34th St, </p>
            <p>New York, NY 10001</p>
          </div>
          
        </div>
        <footer>
          <p>&#169;2021 LIFELYHOOD</p>
        </footer>
      </div>
    </div>
  );
}

