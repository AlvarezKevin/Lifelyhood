import React, { useState } from "react";
import styled from "styled-components";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FormInner>
        {error !== "" ? <div className="error">{error}</div> : ""}
        {/* <FormGroup>
          <FormGroupLabel htmlFor="name">Name</FormGroupLabel>
          <InputField
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </FormGroup> */}
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

const InputButton = styled.input`
  border-style: solid;
  width: 26rem;
  padding: 0.2rem;
  margin-top: 1rem;
  border-radius: 15px;
  background-color: #b2c2a3;
  font-size: 2rem;
`;

const InputField = styled.input`
  border-style: solid;
  width: 26rem;
  padding: 0.2rem;
  margin-bottom: 1rem;
  border-radius: 15px;
  background-color: #dfe3db;
  font-size: 2rem;
  outline: none;
`;

const FormStyle = styled.form`
  display: block;
  position: relative;
  margin-top: 5vh;
`;

const FormInner = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  padding: 30px;
`;

const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 1vh;
`;

const FormGroupLabel = styled.label`
  color: black,
  font-size: 1.5rem;
`;
