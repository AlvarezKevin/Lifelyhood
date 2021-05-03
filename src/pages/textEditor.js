import React, {Component} from 'react';
//import {Editor} from "react-draft-wysiwyg";
import "../styles/textEditor.css";
import Toolbar from '../components/EditorToolbar/toolbar'



class textEditor extends Component {
    render(){

    return(
        
        <div className="pg">
            <Toolbar/>
        </div>
    
    );
}}
export default textEditor;
