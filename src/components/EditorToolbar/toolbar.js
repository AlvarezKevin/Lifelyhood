import React from "react";
//draft-js used to create the text editor
import { Editor, EditorState, RichUtils } from "draft-js";
//import { convertToHTML } from "draft-convert";
import BlockStyleToolbar, {
  getBlockStyle,
} from "./blockStyles/BlockStyleToolbar";
import "../../styles/textEditor.css";

class Toolbar extends React.Component {
  //constructor initiating EditorState inside state
  //content set to empty and passed to Editor as a prop
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  //Use of RichUtils
  //RichUtils has info of core key commands (like: cmd+B)
  //handleKeyCommand uses RichUtils info to apply or remove the style on text
  handleKeyCommand = (command) => {
    //passing a command as an arg which is passed to RichUtils.handleKeyCommand
    //RichUtils.handleKeyCommand handles the key command along w. the Editor State
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    //If an updated EditorState is returned, then the updated new EditorState 
    //object is passed to the onChange method, which will update the state
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  //RichUtils allows functions for inline and block style options 
  //toggleInlineStyle allows for toggling text style thro key commands 
  // Inline style buttons are created by creating a function for each style
  // Each button passes the editor state object and the type of style cmd to RichUtils.toggleInlineStyle
  //BOLD
  onBoldClick = (event) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  //Underline
  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };
  //ITALIC
  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };
  //STRIKETHROUGH WORDS
  onStrikeThroughClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
    );
  };
  //function passes as a callback function when block styles are selected
  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  render() {
    console.log(`this.state.editorState`, this.state.editorState);
    return (
      <div className="editorContainer">
        <div className="toolbar">

          {/* Buttons that take on the different inline styles as a callback function*/}
          <button className="styleButton" id="bold" onClick={this.onBoldClick}>
            B
          </button>
          <button
            className="styleButton"
            id="underline"
            onClick={this.onUnderlineClick}
          >
            U
          </button>

          <button
            className="styleButton"
            id="italic"
            onClick={this.onItalicClick}
          >
            I
          </button>
          <button
            className="styleButton"
            id="strikethrough"
            onClick={this.onStrikeThroughClick}
          >
            abc
          </button>
          
          <BlockStyleToolbar
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
        </div>

        <div className="editors">
          <Editor
            //shows in the editor before anything is typed
            placeholder="Start Writing ..."
            //gets from BlockStyleToolbar for the editor to know how to stlye
            blockStyleFn={getBlockStyle}
            editorState={this.state.editorState}
            // pass the handleKeyCommand to the editor component as a prop so it can function in our text editor.
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Toolbar;
