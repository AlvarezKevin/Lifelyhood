import { useState } from "react";
import axios from "axios";
import { Spinner } from 'reactstrap';

import LoginForm from "../../components/Form/LoginForm";
import PublicLayout from "../../Layout/Public";
import { FlexMain, FlexArticle, FlexFooter, ErrorMessage } from "./AuthStyle";
import { useAuthCtx } from "../../Hooks/useAuthContext";


export default function Login() {
  const { setUserDetails } = useAuthCtx();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const submitHandler = async (formData) => {
    try {
      const { username, password } = formData;
      setLoading(true)
      const { data } = await axios.post('/api/token/login/', { username, password })
      if (data?.auth_token) {
        const token = `${data?.auth_token}`;
        window.localStorage.setItem('user_token', token)
        setUserDetails({
          username,
          token,
        });
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      const data = err?.response?.data || {};
      const msgs = Object.entries(data)
        .map(([key, arr]) => Array.isArray(arr) ? `${key}: ${arr[0] || 'is required'}` : `${key}: is required`)
        .join("\n");
      setError(`${msgs}`);
    }
  };
  return (
    <PublicLayout>
      <FlexMain>
        <FlexArticle>
          <LoginForm onSubmitData={submitHandler} />
        </FlexArticle>
      </FlexMain>
      <div className='flex-c'>
        {loading && <Spinner color="dark" />}
      </div>
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
