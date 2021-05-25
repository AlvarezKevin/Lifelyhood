import React, { useState } from "react";
import ProfileNav from "../../components/ProfileNav";
import PrivateLayout from "./../../Layout/Private";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

// const URLOne = "http://127.0.0.1:8000/api/users/set_username/"
const URLOne = "/api/users/set_username/"
// const URLTwo = "http://127.0.0.1:8000/api/users/me/"
const URLTwo = "/api/users/me/"
// const URLThree = "http://127.0.0.1:8000/api/users/set_password/"
const URLThree = "/api/users/set_password/"

const Setting = () => {
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const submitHandler = async (data) => {
      console.log('data', data);
      try {
        const newUsername = {
          "current_password": data.current_password,
          "new_username": data.new_username
        }
        const newEmail = {
          "email": data.email
        }
        const newPassword = {
          "new_password": data.new_password,
          "current_password": data.current_password
        }
        console.log(newUsername)
        console.log(newEmail)
        console.log(newPassword)

        if (data.new_username) {
          const requestOne = await axios.post(URLOne, newUsername).then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
        });
        }

        if (data.email) {
          const requestTwo = await axios.put(URLTwo, newEmail).then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
        });
        }

        if (data.new_password) {
          const requestThree = await axios.post(URLThree, newPassword).then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
        });
        }
      } catch (err) {
        console.log(`err`);
        setError(`${err.message}`);
      }
  };

  const deleteHandler = async (data) => {
    const deleteUser = {
      "current_password": data.current_password
    }
    console.log(deleteUser)
    try {
      const response = await axios.delete(URLTwo, deleteUser).then(function (response) {
          // handle success
          console.log(response);
          })
          .catch(function (error) {
          // handle error
          console.log(error);
          })
          .then(function () {
          // always executed
      });
    } catch (err) {
      console.log(`err`);
      setError(`${err.message}`);
    }
};

  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="pl- setting-wrapper">
        <h2>My Account</h2>
        <Button outline color="secondary">
          Upload Photo
        </Button>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Username" className="mr-sm-2">
              Username
            </Label>
            <Input type="text" name="new_username" id="new_username" 
              {...register("new_username", { required: false })}
            />
          </FormGroup>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input type="email" name="email" id="email" 
              {...register("email", { required: false })}
            />
          </FormGroup>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Change Password
            </Label>
            <Input type="password" name="new_password" id="new_password" 
              {...register("new_password", { required: false })}
            />
          </FormGroup>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="oldPassword" className="mr-sm-2">
              Enter Password to SAVE changes
            </Label>
            <Input type="password" name="current_password" id="current_password" 
              {...register("current_password", { required: true })}
            />
          </FormGroup>
          <br />
          <Button outline type="submit">Save</Button>
        </Form>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form onSubmit={handleSubmit(deleteHandler)}>
            <br />
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="oldPassword" className="mr-sm-2">
                Enter Password above to delete, ONE CLICK ONLY
              </Label>
            </FormGroup>
            <br />
            <Button outline color="danger" type="submit">
              Delete my Account
            </Button>
          </Form>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Setting;
