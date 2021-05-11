import React, { Component } from "react";
import "../../styles/textEditor.css";
import Toolbar from "../../components/EditorToolbar/toolbar";

class textEditor extends Component {
  render() {
    return (
      <div className="pg">
        <Toolbar />
      </div>
    );
  }
}
export default textEditor;
