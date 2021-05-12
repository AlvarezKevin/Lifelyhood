import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuthCtx = () => useContext(AuthContext);

export const AuthCtxProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserDetails = (details) => {
    /**
     * details: {username, uid, token}
     */
    setUser(details);
  };

  const isAuthenticated = !!user?.token;
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
