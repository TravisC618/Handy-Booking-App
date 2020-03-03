import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "../components/Login";
import Main from "../components/home/Main";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import Account from "../Account";
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
      <Route path="/" exact component={Main} />
      <Route path={LOGIN_URL} exact component={Main} />
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
