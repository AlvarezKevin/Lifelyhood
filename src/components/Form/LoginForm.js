import React, { useState } from "react";
import {
  InputButton,
  InputField,
  FormStyle,
  FormInner,
  FormGroup,
  FormGroupLabel,
  ErrorMessage,
} from "../../styles/LoginStyle";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FormInner>
        {error !== "" ? <ErrorMessage>{error}</ErrorMessage> : ""}
        <FormGroup>
          <FormGroupLabel htmlFor="email">Email</FormGroupLabel>
          <InputField
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="password">Password</FormGroupLabel>
          <InputField
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </FormGroup>
        <InputButton type="submit" value="Log in" />
      </FormInner>
    </FormStyle>
  );
}

export default LoginForm;
