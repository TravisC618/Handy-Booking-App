import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import {
  handleVisible as handleVisibleAction,
  handleRedirect as handleRedirectAction
} from "../../redux/actions/loginAction";

const ProtectedRoute = ({
  component: ProtectedComponent,
  handleVisible,
  handleRedirect,
  location,
  history,
  ...rest
}) => {
  // same as: const {component: ProtectedComponent, ...rest} = props;
  return (
    <Route
      {...rest} // e.g. path, exact, etc
      render={routeProps => {
        if (!isLoggedIn()) {
          handleRedirect(routeProps.location.pathname);
          handleVisible(true);
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: routeProps.location.pathname }
              }}
            />
          );
        }
        return <ProtectedComponent {...routeProps} />;
      }}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible)),
  handleRedirect: redirectTo => dispatch(handleRedirectAction(redirectTo))
});

export default connect(null, mapDispatchToProps)(withRouter(ProtectedRoute));
