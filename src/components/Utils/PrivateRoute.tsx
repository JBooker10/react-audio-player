import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./../Dashboard/Dashboard";
import AuthContext from "./../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }: any): JSX.Element => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Dashboard>
            <Component {...props} />
          </Dashboard>
        )
      }
    />
  );
};

export default PrivateRoute;
