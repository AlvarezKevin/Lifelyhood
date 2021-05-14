import "../../styles/Contact.css";
import { FlexFooter } from "./AuthStyle";

import PublicLayout from "./../../Layout/Public";
export default function Login() {
  return (
    <PublicLayout isVisibleOnPrivate={true}>
      <div className="contact-page content-wrap">
        <div className="heading">
          <h1>
            <b>Contact Us</b>
          </h1>
        </div>

        <div className="container">
          <h2>
            <b>Get Support</b>
          </h2>
          <p>
            If you’re having trouble with Lifelyhood, get assistance from other
            Lifelyhood users or call us at +1 (888) 431 6051.
          </p>

          <hr></hr>

          <h2>
            <b>Lifelyhood Office</b>
          </h2>
          <h4>New York, United States</h4>
          <p>
            Lifelyhood Corporation <br></br>
            151 W 34th St,<br></br>
            New York, NY 10001
          </p>
        </div>
      </div>

      <FlexFooter>
        <p>&#169;2021 LIFELYHOOD</p>
      </FlexFooter>
    </PublicLayout>
  );
}
