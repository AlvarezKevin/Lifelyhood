import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/Public/about";
import Contact from "./pages/Public/contact";
import SignUp from "./pages/Public/signup";
import Login from "./pages/Public/login";
import Profile from "./pages/profile";
import Workspace from "./pages/workspace";
import Schoolspace from "./pages/schoolspace";
import Personalspace from "./pages/personalspace";
import textEditor from "./pages/textEditor";
import axios from "axios";
import { ToastContainer } from "react-toastify";

<ToastContainer hideProgressBar={true} newestOnTop={true} />;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contact} />
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
