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
} from "./style.js";

/*
  Similar to sign-up/login form in order to create an event on your account.
  Must refresh the page in order to get updated. Using axios post in order to create
  the event. Requires event title and start date and end date. 
*/
function AddEventForm({ onSubmitData, error }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
      console.log('data', data);
      let makeDateTime
      if (data.starttime === "" || data.endtime === "") {
        makeDateTime = {
          title: data.title,
          startDate: new Date(data.startdate),
          endDate: new Date(data.enddate),
          description: data.description 
        }
      }
      else {
        const combineStartDate = data.startdate + "T" + data.starttime;
        const combineEndDate = data.enddate + "T" + data.endtime;
        makeDateTime = {
          title: data.title,
          startDate: new Date(combineStartDate),
          endDate: new Date(combineEndDate),
          description: data.description 
        }
      }
      onSubmitData(makeDateTime);
  };
  return (
    <FormStyle onSubmit={handleSubmit(submitHandler)}>
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
            {...register("description", { required: false })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="date">
            Start Date
            {errors.date?.type === "required" && (
              <ErrorMessage>Date is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="date"
            id="date"
            {...register("startdate", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="time">
            Start Time
          </FormGroupLabel>
          <InputField
            type="time"
            id="time"
            {...register("starttime", { required: false })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="date">
            End Date
            {errors.date?.type === "required" && (
              <ErrorMessage>End Date is Required</ErrorMessage>
            )}
          </FormGroupLabel>
          <InputField
            type="date"
            id="date"
            {...register("enddate", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <FormGroupLabel htmlFor="date">
            End Time
          </FormGroupLabel>
          <InputField
            type="time"
            id="time"
            {...register("endtime", { required: false })}
          />
        </FormGroup>
        {/* <InputButton onClick={() => setShowEventbox (prev => !prev)} type="submit" value="Add Event" /> */}
        <InputButton type="submit" value="Add Event" />
      </FormInner>
    </FormStyle>
  );
}

export default AddEventForm;
