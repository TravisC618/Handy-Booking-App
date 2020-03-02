import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "../components/Login";
import Main from "../components/home/Main";
import LoginNew from "../components/home/LoginNew";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import Account from "../Account";
import {
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_BASE_URL,
  LOGIN_URL
} from "./URLMAP";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path={LOGIN_URL} component={Main} />
      <Route path={FIND_CLEANERS_URL} component={FindCleaners} />
      <Route path={CLEANER_DETAILS_URL} component={Details} />
      <Route path={TASK_URL} component={BrowseTasks} />
      {/* <Route path={LOGIN_URL} component={Login} /> */}
      <ProtectedRoute path={ACCOUNT_BASE_URL} component={Account} />
      {/* <Redirect to="/" /> ALWAYS PUT THIS AT THE BOTTOM */}
    </Switch>
  );
};

export default Routes;
