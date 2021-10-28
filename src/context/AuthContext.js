import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "./AuthReducer";
import * as api from "../api/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState);

  const register = async (user) => {
    try {
      const data = await api.register(user);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...user, register }}>
      {children}
    </AuthContext.Provider>
  );
};
