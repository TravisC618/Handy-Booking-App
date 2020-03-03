import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path={FIND_CLEANERS_URL} component={FindCleaners} />
      <Route path={CLEANER_DETAILS_URL} component={Details} />
      <Route path={TASK_URL} component={BrowseTasks} />
      {/* <Route path={LOGIN_URL} component={Login} /> */}
      <ProtectedRoute path={FIND_CLEANERS_URL} component={FindCleaners} />
      <ProtectedRoute path={ACCOUNT_BASE_URL} component={Account} />
      <Redirect to="/" /> {/* NOT MATCH => REDIRECT TO HOMEPAGE */}
    </Switch>
  );
};

export default Routes;
