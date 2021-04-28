import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import BlockStyleToolbar, {getBlockStyle} from "./blockStyles/BlockStyleToolbar";
import "../../styles/textEditor.css";



class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

  }
  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  onBoldClick = event => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };
  
  onUnderlineClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onItalicClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  onStrikeThroughClick = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "STRIKETHROUGH")
    );
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  render() {
    return (
      <div className="editorContainer">
        <div className="toolbar">
          <button className="styleButton" id="bold" onClick={this.onBoldClick}>
            B
          </button>
          <button className="styleButton" id="underline"onClick={this.onUnderlineClick}>
            U
          </button>
          
          <button className="styleButton" id="italic" onClick={this.onItalicClick}>
            I
          </button>
          <button className="styleButton" id="strikethrough" onClick={this.onStrikeThroughClick}>
          abc
        </button>
       
          <BlockStyleToolbar
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
          
        </div>

        <div className="editors">
          <Editor
            placeholder = "Start Writing ..."
            blockStyleFn={getBlockStyle}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Toolbar;
