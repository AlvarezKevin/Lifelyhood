import { useState } from "react";
import SignupForm from "../../components/Form/SignUpForm";
import { FlexMain, FlexArticle, FlexFooter, ErrorMessage } from "./AuthStyle";
import PublicLayout from "../../Layout/Public";

export default function Login() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123",
  // };
  const [error, setError] = useState("");
  const submitHandler = (data) => {
    try {
    } catch (err) {
      setError("There is something wrong");
    }
  };

  return (
    <PublicLayout>
      <FlexMain>
        <FlexArticle>
          <SignupForm onSubmitData={submitHandler} />
        </FlexArticle>
      </FlexMain>{" "}
      {error && (
        <ErrorMessage style={{ textAlign: "center" }}>{error}</ErrorMessage>
      )}
      <FlexFooter>
        By clicking “Log in” above, you acknowledge that you have read and
        understood, and agree to Lifelyhood's Terms & Conditions.
      </FlexFooter>
    </PublicLayout>
  );
}
