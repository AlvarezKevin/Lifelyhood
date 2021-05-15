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
} from "../Form/style.js";

function AddEventForm({ onSubmitData, error }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   Modify form to include both START date, END date
// and optional START time and END time
  return (
    <FormStyle onSubmit={handleSubmit(onSubmitData)}>
      <FormInner>
        <FormGroup>
          <FormGroupLabel htmlFor="title">
            Title
            {errors.title?.type === "required" && (
              <ErrorMessage>Title is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="title"
            id="title"
            {...register("title", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="description">
            Description
          </FormGroupLabel>
          <InputField
            id="description"
            type="description"
            {...register("password", { required: false })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="date">
            Date
            {errors.date?.type === "required" && (
              <ErrorMessage>Date is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="date"
            id="date"
            {...register("date", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="time">
            Time
          </FormGroupLabel>
          <InputField
            type="time"
            id="time"
            {...register("time", { required: false })}
          />
        </FormGroup>
        <InputButton type="submit" value="Add Event" />
      </FormInner>
    </FormStyle>
  );
}

export default AddEventForm;
