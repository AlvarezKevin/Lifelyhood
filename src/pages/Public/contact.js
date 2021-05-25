import "../../styles/Contact.css";
import { FlexFooter } from "./AuthStyle";

import PublicLayout from "./../../Layout/Public";
export default function ContactPage() {
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
            <b>Lifelyhood Office</b>
          </h2>
          <h4>New York, United States</h4>
          <p>
            Lifelyhood Corporation <br></br>
            151 W 34th St,<br></br>
            New York, NY 10001
          </p>

          <hr></hr>

          <h2>
            <b>Get Support</b>
          </h2>
          <p>
            If you’re having trouble with Lifelyhood, get assistance from other
            Lifelyhood users Frequently Asked Questions or contact us at +1 (888) 431 6051 
            or lifelyhood@lifelyhood.org.
          </p>

          <hr></hr>
          <h2>
            <b>Frequently Asked Questions (FAQ)</b>
          </h2>
          <details>
            <summary>I forgot my password</summary>
            <p id='indent'>You can reset your password by clicking "reset password" in the login page. </p>
          </details>
          <details>
            <summary>Where can I find the different workspaces without signing up? </summary>
            <p id='indent'>You must sign up so you can have your own workspace. </p>
          </details>
          <details>
            <summary>How do I remove items from my completed task?</summary>
            <p id='indent'>Hover over the task you would like to delete and on the right side you can select the x to delete your completed task.</p>
          </details>
          <details>
            <summary>How to change my text to other styles?</summary>
            <p id='indent'>You can select the button that you would like to apply to your text. To make bold do cmd+B, italics cmd+I. </p>
          </details>



          
        </div>
      </div>

      <FlexFooter>
        <p>&#169;2021 LIFELYHOOD</p>
      </FlexFooter>
    </PublicLayout>
  );
}
