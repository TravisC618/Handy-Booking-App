import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/homepage/Home";
import Chat from "../components/account/chat_app/Chat";
import Join from "../components/account/chat_app/Join";
import Details from "../pages/Details";
import BrowseTasks from "../pages/BrowseTasks";
import Account from "../pages/Account";
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
      <Route path="/join" component={Join} />
      <Route path="/chat" component={Chat} />
      <Redirect to="/" /> {/* NOT MATCH => REDIRECT TO HOMEPAGE */}
    </Switch>
  );
};

export default Routes;
