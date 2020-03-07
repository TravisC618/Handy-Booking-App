import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Index from "../components/homepage/Home";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import Account from "../Account";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_BASE_URL,
  ACCOUNT_DASHBOARD_URL,
  LOGIN_URL
} from "./URLMAP";
import PostSide from "../components/find_cleaners/PostSide";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path={LOGIN_URL} exact component={Index} />
      <Route path={CLEANER_DETAILS_URL} component={Details} />
      <Route path={TASK_URL} component={BrowseTasks} />
      <ProtectedRoute path={FIND_CLEANERS_URL} component={PostSide} />
      <ProtectedRoute path={ACCOUNT_BASE_URL} component={Account} />
      <Redirect to="/" /> {/* NOT MATCH => REDIRECT TO HOMEPAGE */}
    </Switch>
  );
};

export default Routes;
