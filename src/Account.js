import React from "react";
import Menu from "./components/account/Menu";
import "./css/account/account.css";
// import Dashboard from "./components/account/Dashboard";
// import Notifications from '../components/account/Notifications';
// import Profile from '../components/account/Profile';
// import Skills from '../components/account/Skills';
// import Badges from '../components/account/Badges';
// import Alerts from '../components/account/Alerts';
// import NotificationSettings from '../components/account/NotificationSettings';
// import Mobile from '../components/account/Mobile';
// import Portfolio from '../components/account/Portfolio';
// import Password from '../components/account/Password';

const Account = props => {
  return (
    <div className="account">
      <div className="account__page">
        <div className="account__content">
          {/* <div className="col-4"> */}
          <Menu />
          {/* </div> */}
          {/* <div className="col-8"> */}

          {/* {currentPath === "/account/dashboard" ? <Dashboard /> : null}
          {currentPath === "/account/payment-history" ? (
            <PaymentHistory />
          ) : null} */}

          {/* <Router>
                            <Switch>
                            <Route path="/account/dashboard" exact component={Dashboard} />
                            <Route path="/account/payment-history" component={PaymentHistory} />
                            <Route path="/account/notifications" component={Notifications} />
                            <Route path="/account/profile" component={Profile} />
                            <Route path="/account/skills" component={Skills} />
                            <Route path="/account/badges" component={Badges} />
                            <Route path="/account/alerts" component={Alerts} />
                            <Route path="/account/notification-settings" component={NotificationSettings} />
                            <Route path="/account/mobile" component={Mobile} />
                            <Route path="/account/portfolio" component={Portfolio} />
                            <Route path="/account/password" component={Password} />
                            </Switch>
                        </Router> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Account;
