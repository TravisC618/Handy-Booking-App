import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
  // same as: const {component: ProtectedComponent, ...rest} = props;
  return (
    <Route
      {...rest} // e.g. path, exact, etc
      render={routeProps => {
        if (!isLoggedIn()) {
          return <Redirect to={{}} />;
        }
        return <ProtectedComponent {...routeProps} />;
      }}
    />
  );
};

export default ProtectedRoute;
