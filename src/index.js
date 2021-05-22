import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
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
