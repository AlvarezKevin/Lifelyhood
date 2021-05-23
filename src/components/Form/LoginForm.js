import React from "react";
import { useForm } from "react-hook-form";
import {
  InputButton,
  InputField,
  FormStyle,
  FormInner,
  FormGroup,
  FormGroupLabel,
  ErrorMessage,
} from "./style";

function LoginForm({ onSubmitData, error }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormStyle onSubmit={handleSubmit(onSubmitData)}>
      <FormInner>
        <FormGroup>
          <FormGroupLabel htmlFor="username">
            Username
            {errors.username?.type === "required" && (
              <ErrorMessage>Username is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="password">
            Password
            {errors.password?.type === "required" && (
              <ErrorMessage>Password is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </FormGroup>
        <InputButton type="submit" value="Log in" />
      </FormInner>
    </FormStyle>
  );
}

export default LoginForm;
