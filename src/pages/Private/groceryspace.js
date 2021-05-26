import React, { Component } from "react";
import "../../styles/grocery.css";
import PrivateLayout from "../../Layout/Private";
//The private directory has all private pages (including this file) that are accessible only to the authenticated users. All pages are wrapped inside the private layout.
class Groceryspace extends Component {
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
export default Groceryspace;
