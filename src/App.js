import React from "react";
import "./styles/App.css";
import Root from "./Root"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Workspace from "./pages/workspace";
import Schoolspace from "./pages/schoolspace";
import Personalspace from "./pages/personalspace";
import textEditor from "./pages/textEditor";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/work" component={Workspace} />
        <Route path="/school" component={Schoolspace} />
        <Route path="/personal" component={Personalspace} />
        <Route path="/editor" component={textEditor} />
      </Switch>
    </Router>
  );
}

export default App;
