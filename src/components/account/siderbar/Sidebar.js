import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { getRoleId } from "../../../utils/auth";
import Profile from "./Profile";
import SidebarNav from "./SidebarNav";

import { ACCOUNT_BASE_URL } from "../../../routes/URLMAP";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    padding: 20,
    height: "100%",
    fontSize: "40px",
    minWidth: 180
  },
  divider: {
    margin: 10
  },
  nav: {
    marginBottom: 20
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const customerId = getRoleId("customer");
  const tradieId = getRoleId("tradie");
  const userRoleId = customerId || tradieId;

  const classes = useStyles();

  const pages = [
    {
      title: "Dashboard",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/dashboard`,
      icon: <DashboardIcon />
    },
    {
      title: "Payment History",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/payment-history`,
      icon: <ShoppingBasketIcon />
    },
    {
      title: "Notifications",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/notifications`,
      icon: <PeopleIcon />
    },

    {
      title: "Authentication",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/password`,
      icon: <LockOpenIcon />
    },
    {
      title: "Profile",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/profile`,
      icon: <AccountBoxIcon />
    },
    {
      title: "View Tasks",
      href: `${ACCOUNT_BASE_URL}/${userRoleId}/view-tasks`,
      icon: <SettingsIcon />
    }
  ];

  return (
    <React.Fragment>
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
