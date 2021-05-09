import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../../components/Form/LoginForm";
import { Home, FlexMain, FlexArticle, FlexFooter } from "./AuthStyle";
import PublicLayout from "../../Layout/Public";

export default function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  let history = useHistory();

  const [error, setError] = useState("");
  const onLogin = (data) => {
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
          <LoginForm onSubmitData={onLogin} />
        </FlexArticle>
      </FlexMain>
      <FlexFooter>
        By clicking “Log in” above, you acknowledge that you have read and
        understood, and agree to Lifelyhood's Terms & Conditions.
      </FlexFooter>
    </PublicLayout>
  );
}
