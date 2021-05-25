import { useState } from "react";
import { useHistory } from "react-router";
import { Spinner } from "reactstrap";
import toast from "react-hot-toast";
import axios from "axios";

import SignupForm from "../../components/Form/SignUpForm";
import { FlexMain, FlexArticle, FlexFooter, ErrorMessage } from "./AuthStyle";
import PublicLayout from "../../Layout/Public";

export default function Signup() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (formData) => {
    try {
      setLoading(true);
      const { username, email, password } = formData;
      const { data } = await axios.post("/api/users/", {
        username,
        email,
        password,
      });
      if (data?.username) {
        toast.success(
          `Hey ${username}, your account is created. Please login.`
        );
        history.push("/login");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const data = err?.response?.data || {};
      const msgs = Object.entries(data)
        .map(([key, arr]) =>
          Array.isArray(arr)
            ? `${key}: ${arr[0] || "is required"}`
            : `${key}: is required`
        )
        .join("\n");
      setError(`${msgs}`);
    }
  };

  return (
    <PublicLayout>
      <FlexMain>
        <FlexArticle>
          <SignupForm onSubmitData={submitHandler} loading={loading} />
        </FlexArticle>
      </FlexMain>{" "}
      <div className="flex-c">{loading && <Spinner color="dark" />}</div>
      {error && (
        <ErrorMessage style={{ textAlign: "center" }}>{error}</ErrorMessage>
      )}
      <FlexFooter>
        By clicking “Sign up” above, you acknowledge that you have read and
        understood, and agree to Lifelyhood's Terms & Conditions.
      </FlexFooter>
    </PublicLayout>
  );
}
