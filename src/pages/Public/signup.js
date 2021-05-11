import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import SignupForm from "../../components/Form/SignUpForm";
import { FlexMain, FlexArticle, FlexFooter } from "./AuthStyle";
import PublicLayout from "../../Layout/Public";

export default function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  let history = useHistory();

  const [error, setError] = useState("");
  const submitHandler = (data) => {
    try {
    } catch (err) {
      setError("There is something wrong");
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <PublicLayout>
      <FlexMain>
        <FlexArticle>
          <SignupForm onSubmitData={submitHandler} />
        </FlexArticle>
      </FlexMain>
      <FlexFooter>
        By clicking “Log in” above, you acknowledge that you have read and
        understood, and agree to Lifelyhood's Terms & Conditions.
      </FlexFooter>
    </PublicLayout>
  );
}
