import pic from "../../images/about/manage.png";
import Mike from "../../images/about/mikePic.jpg";
import Kevin from "../../images/about/kPic.jpg";
import Niharika from "../../images/about/nPic.jpg";
import Myriam from "../../images/about/mPic.jpg";
import Kazi from "../../images/about/kaziPic.jpg";
import Hammad from "../../images/about/hammedPic.jpg";
import PublicLayout from "./../../Layout/Public";
import "../../styles/About.css";
import { FlexFooter } from "./AuthStyle";
// The public directory has all public pages that are accessible only when the user is not authenticated. And all pages are wrapped inside the public layout.
export default function AboutPage() {
  return (
    <PublicLayout isVisibleOnPrivate={true}>
      <div className="">
        <div className="content-wrap">
          <div className="contain">
            <h1>
              <b>About Lifelyhood</b>
            </h1>
            <h2>
              <b>Lifelyhood for Everyone</b>
            </h2>
            <img src={pic} className="center_img" alt="Stress free" />
            <div className="modo">
              <p>
                Enough workspaces to keep all your notes, projects, and work
                organized.
              </p>
            </div>
            <p id="info">Work smater, not harder</p>
            <hr></hr>
            <div>
              <h2>Our Creators</h2>
              <h3>Frontend</h3>
              <ul className="creator-profile">
                <li>
                  <img src={Kazi} height="225" alt="Name" title="Name" />
                  <p>Kazi Siam</p>
                </li>
                <li>
                  <img
                    src={Myriam}
                    max-width="100%"
                    height="225"
                    alt="Name"
                    title="Name"
                  />
                  <p>Myriam Yumbla</p>
                </li>
                <li>
                  <img
                    src={Niharika}
                    max-width="100%"
                    height="225"
                    alt="Name"
                    title="Name"
                  />
                  <p>Niharika Alam</p>
                </li>
              </ul>
              <h3>Backend</h3>
              <ul className="creator-profile">
                <li>
                  <img src={Hammad} height="225" alt="Name" title="Name" />
                  <p>Hammad</p>
                </li>
                <li>
                  <img
                    src={Kevin}
                    max-width="100%"
                    height="225"
                    alt="Name"
                    title="Name"
                  />
                  <p>Kevin Alvarez</p>
                </li>
                <li>
                  <img src={Mike} height="225" alt="Name" title="Name" />
                  <p>Mike Neri</p>
                </li>
              </ul>
            </div>
          </div>
          <FlexFooter>
            <p>&#169;2021 LIFELYHOOD</p>
          </FlexFooter>
        </div>
      </div>
    </PublicLayout>
  );
}
