import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'USER' or 'OWNER'

  const loginAsUser = () => setRole('USER');
  const loginAsOwner = () => setRole('OWNER');
  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, loginAsUser, loginAsOwner, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
