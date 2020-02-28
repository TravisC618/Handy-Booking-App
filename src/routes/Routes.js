import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/home/Main";
import Dashboard from "../components/account/Dashboard";
import PaymentHistory from "../components/account/PaymentHistory";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import Account from "../Account";
import Menu from "../components/account/Menu";
import {
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_URL
} from "./URLMAP";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path={FIND_CLEANERS_URL} exact component={FindCleaners} />
      <Route path={CLEANER_DETAILS_URL} exact component={Details} />
      <Route path={TASK_URL} exact component={BrowseTasks} />
      <Route path={ACCOUNT_URL} component={Account} />
      <Redirect to="/" /> {/* ALWAYS PUT THIS AT THE BOTTOM */}
    </Switch>
  );
};

export default Routes;
