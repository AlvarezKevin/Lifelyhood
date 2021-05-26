import React, { createContext, useState, useContext, useEffect } from "react";
import { setAxiosAuthToken } from "../Utils/services";
import axios from "axios";
const AuthContext = createContext();
// Context is React API that provide the facility for our states to be global for all components in react app.
// useAuthContext has few stats e.g: user is either authenticated or not.
export const useAuthCtx = () => useContext(AuthContext);

export const AuthCtxProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const getToken = window.localStorage.getItem("user_token");
      if (getToken) {
        setAxiosAuthToken(getToken);
        const { data } = await axios.get("/api/users/me/");
        if (data?.username) {
          setUserDetails({
            username: data?.username,
            token: getToken,
          });
        }
      } else {
        setAxiosAuthToken(undefined);
        setUserDetails(null);
      }
    })();
  }, []);
  const setUserDetails = (details) => {
    setUser(details);
  };

  const logout = () => {
    setAxiosAuthToken(undefined);
    setUser(null);
    window.localStorage.removeItem("user_token");
  };
  const isAuthenticated = !!user?.token;
  return (
    // Context API provides the component named "Provider." It's a wrapper. We just wrapped our app component inside the Provider component and afterward use the other React function: useContext(created_context) it will give all states or data that you pass in the provider.
    <AuthContext.Provider
      value={{ user, isAuthenticated, setUserDetails, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
