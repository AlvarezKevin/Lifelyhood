import React, { useState } from "react";
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
  const submitHandler = (data) => {
    console.log(`data`, data);
    onSubmitData(data);
  };
  return (
    <FormStyle onSubmit={handleSubmit(submitHandler)}>
      <FormInner>
        <FormGroup>
          <FormGroupLabel htmlFor="email">
            Email
            {errors.email?.type === "required" && (
              <ErrorMessage>Email is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="email"
            id="email"
            {...register("email", { required: true })}
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
