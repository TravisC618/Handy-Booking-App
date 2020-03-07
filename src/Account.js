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

          <Menu />
          {/* </div> */}
          {/* <div className="col-8"> */}

          {/* {currentPath === "/account/dashboard" ? <Dashboard /> : null}
          {currentPath === "/account/payment-history" ? (
            <PaymentHistory />
          ) : null} */}

        </div>
      </div>
    </div>
  );
};

export default Account;
