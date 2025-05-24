import { createContext, useState, useEffect } from "react";
import authService from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
    setIsLoading(false);
  }, []);

  const login = async (userData) => {
    const response = await authService.login(userData);
    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
  };
  const register = async (userData) => {
    const response = await authService.register(userData);
    setUser(response);
    localStorage.setItem("user", JSON.stringify(response));
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
