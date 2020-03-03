import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import {
  ACCOUNT_BASE_URL,
  ACCOUNT_DASHBOARD_URL,
  ACCOUT_PAYMENT_HISTORY_URL
} from "../../routes/URLMAP";
import Dashboard from "./Dashboard";
import PaymentHistory from "./PaymentHistory";
import "../../css/account/menu.css";

const Menu = props => {
  const { match } = props;
  return (
    <div className="menu">
      <div className="menu__user">
        <div className="menu__user-avatar"></div>
        <div className="menu__user-name">User Name</div>
      </div>

      <div className="menu__list">
        <div className="menu-folder expanded">
          <div className="menu-folder-items showing">
            <Link className="button" to={`${ACCOUNT_BASE_URL}/dashboard`}>
              Dashboard
            </Link>
            <Link className="button" to={`${ACCOUNT_BASE_URL}/payment-history`}>
              PaymentHistory
            </Link>
            <a className="button">
              Notifications
              <span className="number notifications-count off">0</span>
            </a>
          </div>
        </div>
        <div className="menu-folder">
          <div className="menu-folder-control showing">
            <a className="button">Settings</a>
          </div>
          <div className="menu-folder-items">
            <a className="button" href="/account/profile">
              Account
            </a>
            <a className="button" href="/account/skills">
              Skills
            </a>
            <a className="button" href="/account/badges">
              Badges
            </a>
            <a className="button" href="/account/alerts">
              Task Alerts
            </a>
            <a className="button" href="/account/notification-settings">
              Notification Settings
            </a>
            <a className="button" href="/account/mobile">
              Mobile
            </a>
            <a className="button" href="/account/portfolio">
              Portfolio
            </a>
            <a className="button" href="/account/password">
              Password
            </a>
          </div>
        </div>
      </div>

      <Route path={`${match.path}/dashboard`} component={Dashboard} />
      <Route
        path={`${match.path}/payment-history`}
        component={PaymentHistory}
      />
    </div>
  );
};

export default withRouter(Menu);
