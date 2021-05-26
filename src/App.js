import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Setups

import axios from "axios";
import Setting from "./pages/Private/Setting";

// Public Pages

import Home from "./pages";
import About from "./pages/Public/about";
import Contact from "./pages/Public/contact";
import SignUp from "./pages/Public/signup";
import Login from "./pages/Public/login";

// Private Pages
import Profile from "./pages/Private/profile";
import Workspace from "./pages/Private/workspace";
import Schoolspace from "./pages/Private/schoolspace";
import Personalspace from "./pages/Private/personalspace";
//SchoolSpace
import textEditor from "./pages/Private/textEditor";
import MyCalendar from "./pages/Private/calendar";
import MyCalendarEvents from "./pages/Private/calendarEvents";
import Todos from "./pages/Private/Todos";
import Links from "./pages/Private/links";
import Exam from "./pages/Private/exams";
import Assignment from "./pages/Private/assignments";
//WorkSpace
import JobApp from "./pages/Private/jobapp";
import Tasks from "./pages/Private/tasks";
import Meetings from "./pages/Private/meetings";
import Ledger from "./pages/Private/ledger";
import Presentations from "./pages/Private/presentations";
//PersonalSpace
import Fitness from "./pages/Private/fitness";
import Health from "./pages/Private/health";
import Grocery from "./pages/Private/grocery";
import Journal from "./pages/Private/journal";
import Travel from "./pages/Private/travel";

//axios.defaults.headers.common = {headers: {'X-CSRFToken': csrftoken}}
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />

          {/* ******Private routes****** */}
          {/* All Spaces */}
          <Route path="/profile" component={Profile} />
          <Route path="/work" component={Workspace} />
          <Route path="/school" component={Schoolspace} />
          <Route path="/personal" component={Personalspace} />
          <Route path="/Setting" component={Setting} />
          <Route path="/calendar" component={MyCalendar} />
          <Route path="/events" component={MyCalendarEvents} />
          {/* SchoolSpace */}
          <Route path="/editor" component={textEditor} />
          <Route path="/exams" component={Exam} />
          <Route path="/assignments" component={Assignment} />
          <Route path="/links" component={Links} />
          <Route path="/todos" component={Todos} />
          {/* WorkSpace */}
          <Route path="/jobapp" component={JobApp} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/meetings" component={Meetings} />
          <Route path="/ledger" component={Ledger} />
          <Route path="/presentations" component={Presentations} />

          {/* PersonalSpace */}
          <Route path="/fitness" component={Fitness} />
          <Route path="/health" component={Health} />
          <Route path="/grocery" component={Grocery} />
          <Route path="/journal" component={Journal} />
          <Route path="/travel" component={Travel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
