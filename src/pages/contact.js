import { NavLink as Link } from "react-router-dom";
import home from "../images/home.svg";
import "../styles/Contact.css";

export default function Login() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <Link to="/">
            <img src={home} className="home" alt="logo" />
          </Link>
        </div>

        <div className="heading">
          <h1><b>Contact Us</b></h1>
        </div>
         
        <div className="container">
            <h2><b>Get Support</b></h2>
            <p>
            If you’re having trouble with Lifelyhood, get assistance from other Lifelyhood users or call us at +1 (888) 431 6051.
            </p>

            <hr></hr>
          
            <h2><b>Lifelyhood Office</b></h2>
            <h4>New York, United States</h4>
            <p className="address">Lifelyhood Corporation</p>
            <p className="address"> 151 W 34th St, </p>
            <p className="address">New York, NY 10001</p>
          </div>
          
        
        <footer>
          <p>&#169;2021 LIFELYHOOD</p>
        </footer>
      </div>
    </div>
  );
}

