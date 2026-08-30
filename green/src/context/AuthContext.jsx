import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'user-123',
    name: 'محمد علي',
    email: 'user@example.com',
    isAuthenticated: true,
  });

  const logout = () => {
    setUser({
      ...user,
      isAuthenticated: false,
    });
  };

  const login = (userData) => {
    setUser({
      ...userData,
      isAuthenticated: true,
    });
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
