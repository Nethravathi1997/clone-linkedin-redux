import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};