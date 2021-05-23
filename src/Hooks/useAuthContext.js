import React, { createContext, useState, useContext, useEffect } from "react";
import { setAxiosAuthToken } from "../Utils/services"
import axios from "axios";
const AuthContext = createContext();

export const useAuthCtx = () => useContext(AuthContext);

export const AuthCtxProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    (async () => {
      const getToken = window.localStorage.getItem("user_token");
      if (getToken) {
        setAxiosAuthToken(getToken);
        const { data } = await axios.get('/api/users/me/');
        if (data?.username) {
          setUserDetails({
            username: data?.username,
            token: getToken
          })
        }
      } else {
        setAxiosAuthToken(undefined);
        setUserDetails(null)
      }
    })()

  }, [])
  const setUserDetails = (details) => {
    setUser(details);
  };

  const logout = () => {
    setAxiosAuthToken(undefined);
    setUser(null)
    window.localStorage.removeItem("user_token")
  };
  const isAuthenticated = !!user?.token;
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, setUserDetails, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
