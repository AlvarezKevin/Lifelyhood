import { useState } from "react";
import LoginForm from "../../components/Form/LoginForm";
import PublicLayout from "../../Layout/Public";
import { FlexMain, FlexArticle, FlexFooter, ErrorMessage } from "./AuthStyle";
import { useAuthCtx } from "../../Hooks/useAuthContext";

const adminUser = {
  email: "admin@admin.com",
  password: "admin123",
};
export default function Login() {
  const { setUserDetails } = useAuthCtx();

  const [error, setError] = useState(null);
  const submitHandler = async (data) => {
    try {
      const { email, password } = data;
      if (email !== adminUser.email) {
        throw new Error("Invalid Email");
      } else if (password !== adminUser.password) {
        throw new Error("Invalid Password");
      }
      setUserDetails({
        username: "Anonymous",
        email,
        token: "a1s2d3f4cdfsdf",
      });
    } catch (err) {
      console.log(`err`);
      setError(`${err.message}`);
    }
  };
  return (
    <PublicLayout>
      <FlexMain>
        <FlexArticle>
          <LoginForm onSubmitData={submitHandler} />
        </FlexArticle>
      </FlexMain>
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
