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
    Here EditEventForm would have taken the event prop you clicked and filled
    in the existing data and then you would be able to click edit inorder to modify
    and patch its content. Need to add delete submit handler in order to delete the
    event.
*/

function EditEventForm({ onSubmitData, props, error }) {
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
  console.log("HELLO I AM IN FORM", props)
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
            value={props.props.title}
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
            value={props.props.desc ? (props.props.desc) : ""}
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
            value={props.props.start.toDateString()}
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
            value={props.props.start}
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
            value={props.props.end}
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
            value={props.props.end}
            {...register("endtime", { required: false })}
          />
        </FormGroup>
        <InputButton type="submit" value="Edit Event" />
      </FormInner>
    </FormStyle>
  );
}

export default EditEventForm;
