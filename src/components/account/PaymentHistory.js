import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";

import history from "../../img/payment_history.webp";
import earned from "../..//img/payments_earned.webp";
import "../../css/account/payment-history.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    flexGrow: 1,
    backgroundColor: "inherit",
    color: "inherit",
    boxShadow: "none"
  },

  primaryColor: {
    color: "inherit",
    backgroundColor: "inherit",
    boxShadow: "none"
  },

  textStyle: {
    fontWeight: 500,
    fontSize: "0.85rem",
    fontFamily: "inherit",

    "&:hover": {
      textDecoration: "none",
      color: "#008fb4"
    }
  }
}));

const PaymentHistory = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="history vertical-scroll">
      <div className="history__page">
        <div className="history__page-header">
          <h4>Payments History</h4>
        </div>
        <div className="history__page-inner">
          <div className={classes.root}>
            <AppBar position="static" className={classes.primaryColor}>
              <Tabs
                className="payments-direction"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
              >
                {/* <div className="tabs" id="nav-tab" role="tablist"> */}
                {/* <div
                className="tab half active"
                data-ui-test="tab-incoming"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Earned
              </div> */}
                <LinkTab
                  className={classes.textStyle}
                  label="Earned"
                  href="/earned"
                  {...a11yProps(0)}
                />
                <LinkTab
                  className={classes.textStyle}
                  label="Outgoing"
                  href="/outgoing"
                  {...a11yProps(1)}
                />
                {/* <div
                className="tab half"
                data-ui-test="tab-outgoing"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Outgoing
              </div> */}
                {/* </div> */}
              </Tabs>
            </AppBar>

            <div className="history__filters-date">
              <div className="history__filters-filter">
                <label className="history__filters-label">Showing</label>
                <div className="history__date-selector">
                  <select name="date" className="history__date-select">
                    <option value="allTime">All</option>
                    <option value="range">Range</option>
                  </select>
                </div>
              </div>
            </div>
            {/* 
          <div
            className="history__amount"
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="history__amount-label">
              <span>Net Earned</span>
            </div>
            <h4 className="history__amount-value">
              <span data-ui-test="net-amount">$0.00</span>
            </h4>
          </div> */}

            <TabPanel value={value} index={0}>
              <div className="history__amount-label">
                <span>Net Earned</span>
              </div>
              <h4 className="history__amount-value">
                <span data-ui-test="net-amount">$0.00</span>
              </h4>
            </TabPanel>

            {/* <div
            className="history__amount"
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div className="history__amount-label">
              <span>Net Outgoing</span>
            </div>
            <h4 className="history__amount-value">
              <span data-ui-test="net-amount">$0.00</span>
            </h4>
          </div> */}

            <TabPanel value={value} index={1}>
              <div className="history__amount-label">
                <span>Net Outgoing</span>
              </div>
              <h4 className="history__amount-value">
                <span data-ui-test="net-amount">$0.00</span>
              </h4>
            </TabPanel>
          </div>
          <Divider />
          <div className="transaction-results">
            <div className="padder">
              <div className="transaction-count">
                <span className="number">0 transactions for</span>
                <span className="date-range">
                  1st Jan 2020 - 25th Mar 2020
                </span>
              </div>
            </div>

            {/* <div
            className="padder"
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="empty__page">
              <img
                src={earned}
                alt="no_results"
                className="empty__page-EmptyImg"
              />
              <p className="page__text">
                You haven't earned from any tasks yet. Yet to find the right
                task?
              </p>
              <Link className="page__button" to="/tasks">
                Browse tasks
              </Link>
            </div>
          </div> */}

            <TabPanel value={value} index={0}>
              <div className="empty__page">
                <img
                  src={earned}
                  alt="no_results"
                  className="empty__page-EmptyImg"
                />
                <p className="page__text">
                  You haven't earned from any tasks yet. Yet to find the right
                  task?
                </p>
                <Link className="page__button" to="/tasks">
                  Browse tasks
                </Link>
              </div>
            </TabPanel>

            {/* <div
            class="padder-5-20 clearfix"
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div class="empty__page">
              <img
                src={history}
                alt="no_results"
                class="empty__page-EmptyImg"
              />
              <p
                class="page__text">
                You haven't paid for any tasks yet. But let's change that!
              </p>
              <Link className="page__button" to="/tasks">
                Post a task
              </Link>
            </div>
          </div> */}

            <TabPanel value={value} index={1}>
              <div class="empty__page">
                <img
                  src={history}
                  alt="no_results"
                  class="empty__page-EmptyImg"
                />
                <p class="page__text">
                  You haven't paid for any tasks yet. But let's change that!
                </p>
                <Link className="page__button" to="/find-cleaners">
                  Post a task
                </Link>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
