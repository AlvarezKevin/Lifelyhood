import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Utils/styles/global";
import theme from "./Utils/styles/theme";
import { Toaster } from "react-hot-toast";
import { AuthCtxProvider } from "./Hooks/useAuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthCtxProvider>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
        <Toaster />
      </ThemeProvider>
    </AuthCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
