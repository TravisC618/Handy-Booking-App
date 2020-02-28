import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/home/Main";
import Dashboard from "../components/account/Dashboard";
import PaymentHistory from "../components/account/PaymentHistory";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import Account from "../Account";
import Menu from "../components/account/Menu";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/find-cleaners" exact component={FindCleaners} />
      <Route path="/details" exact component={Details} />
      <Route path="/tasks" exact component={BrowseTasks} />
      <Route path="/account/" component={Account} />
    </Switch>
  );
};

export default Routes;
