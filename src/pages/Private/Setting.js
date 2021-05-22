import React from "react";
import ProfileNav from "../../components/ProfileNav";
import PrivateLayout from "./../../Layout/Private";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Setting = () => {
  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="pl- setting-wrapper">
        <h2>My Account</h2>
        <Button outline color="secondary">
          Upload Photo
        </Button>
        <Form>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="Username" className="mr-sm-2">
              Username
            </Label>
            <Input type="text" name="username" id="Username" />
          </FormGroup>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <br />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Change Password
            </Label>
            <Input type="password" name="password" id="examplePassword" />
          </FormGroup>
          <br />
          <Button outline>Save</Button>
        </Form>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button outline color="danger">
            Delete my Account
          </Button>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Setting;
