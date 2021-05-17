import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Root from "./Root"; 
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
import requireAuth from "./utils/RequireAuth";
import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000";
//axios.defaults.headers.common = {headers: {'X-CSRFToken': csrftoken}}
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <Root>
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/profile" component={requireAuth(Profile)} />
        <Route path="/work" component={requireAuth(Workspace)} />
        <Route path="/school" component={requireAuth(Schoolspace)} />
        <Route path="/personal" component={requireAuth(Personalspace)} />
        <Route path="/editor" component={requireAuth(textEditor)} />
      </Switch>
    </Root>
  );
}

export default App;
