import { NavLink as Link } from "react-router-dom";
import home from "../images/home.svg";
import pic from "../images/about/manage.png";
//import kazi from "../images/about/manage.png";
import myriam from "../images/about/myPic.jpg";
//import niharika from "../images/about/manage.png";
//import hammad from "../images/about/manage.png";
import kevin from "../images/about/kPic.jpg";
//import mike from "../images/about/manage.png";
import "../styles/About.css";

export default function Login() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <Link to="/">
            <img src={home} className="logo" alt="logo" />
          </Link>
        </div>
        
          
        
        <div className="contain">
          <h1><b>About Lifelyhood</b></h1>
          <h2><b>Lifelyhood for Everyone</b></h2>
          <img src={pic} className="center_img" alt="Stress free" />
          <div className="modo">
            <p>
              Enough workspaces to keep all your notes, projects, and work organized.
            </p>
          </div>
          <p id="info">Work smater, not harder</p>
          <hr></hr>
          <div>
            <h2>Our Creators</h2>
            <h3>Frontend</h3>
            <ul id="creator-profile">
              <li>
                  <img src=".jpg" width="200" height="225" alt="Kazi Siam" title="Kazi Siam" />
                  <p>Kazi Siam</p>
              </li>
              <li>
                  <img src={myriam} width="190" height="225" alt="Myriam Yumbla" title="Myriam Yumbla" />
                  <p>Myriam Yumbla</p>
              </li>
              <li>
                  <img src=".jpg" width="200" height="225" alt="Niharika Alam" title="Niharika Alam" />
                  <p>Niharika Alam</p>
              </li>
            </ul>
            <h3>Backend</h3>
            <ul id="creator-profile">
              <li>
                  <img src=".jpg" width="200" height="225" alt="Hammad" title="Hammad" />
                  <p>Hammad</p>
              </li>
              <li>
                  <img src={kevin} width="190" height="225" alt="Kevin Alvarez" title="Kevin Alvarez" />
                  <p>Kevin Alvarez</p>
              </li>
              <li>
                  <img src=".jpg" width="200" height="225" alt="Mike Neri" title="Mike Neri" />
                  <p>Mike Neri</p>
              </li>
            </ul>
            
          </div>
        </div>
        <footer>
          <p>&#169;2021 LIFELYHOOD</p>
        </footer>
      </div>
    </div>
  );
}