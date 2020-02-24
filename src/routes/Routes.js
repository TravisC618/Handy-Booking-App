import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/home/Main";
import FindCleaners from "../FindCleaners";
import Details from "../Details";
import BrowseTasks from "../BrowseTasks";
import {
  HOMPAGE_URL,
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL
} from "./URLMAP";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path={FIND_CLEANERS_URL} component={FindCleaners} />
        <Route exact path={CLEANER_DETAILS_URL} component={Details} />
        <Route exact path={TASK_URL} component={BrowseTasks} />
        <Route component={Main} />
      </Switch>
    </Router>
  );
};

export default Routes;
