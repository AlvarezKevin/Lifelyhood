import React, { Component } from "react";
import "../../styles/grocery.css";
import PrivateLayout from "../../Layout/Private";

class grocery extends Component {
  render() {
    return (
      <PrivateLayout title="STAYING FIT">
        <div className="fit">

          <h1 className="heading">Grocery List</h1>
        </div>
      </PrivateLayout>
    );
  }
}
export default grocery;
