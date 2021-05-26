import React, { Component } from "react";
import "../../styles/textEditor.css";
import Toolbar from "../../components/EditorToolbar/toolbar";
import PrivateLayout from "./../../Layout/Private";
//The private directory has all private pages (including this file) that are accessible only to the authenticated users. All pages are wrapped inside the private layout.
class textEditor extends Component {
  render() {
    return (
      <PrivateLayout title="Notes">
        <div className="pg">
          <Toolbar />
        </div>
      </PrivateLayout>
    );
  }
}
export default textEditor;
