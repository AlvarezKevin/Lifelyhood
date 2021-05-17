//src/Reducer.js

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer"; // add import 

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer, // <--- add it here
    auth: loginReducer, // <--- add reducer
  });

export default createRootReducer;
