import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import { isIncluded } from "../utils/helper";
import logo from "../img/logo.png";
import Login from "./Login";
import { isLoggedIn } from "../utils/auth";
import { removeToken, removeUserId } from "../utils/auth";
import {
  HOME_URL,
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_DASHBOARD_URL
} from "../routes/URLMAP";
import "../css/navigation.css";
import "../css/login.scss";

class Navigation extends Component {
  logout = history => {
    removeToken();
    removeUserId();
    history.push(HOME_URL);
  };

  componentDidMount() {
    // if it doesn't contain "/login", return -1
    if (isIncluded(this.props.location.pathname, "/login")) {
      this.props.handleVisible(true);
    }
  }
  componentDidUpdate() {
    // if it doesn't contain "/login", return -1
    if (isIncluded(this.props.location.pathname, "/login")) {
      this.props.handleVisible(true);
    }
  }

  render() {
    const { history, location, handleVisible } = this.props;
    const currentPath = location.pathname;
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" />
            </a>
            <form className="form-inline">
              <i className="fas fa-search" />
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="SEARCH BY POSTCODE"
                aria-label="Search"
              />
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={CLEANER_DETAILS_URL}>
                    Browse Handy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={TASK_URL}>
                    Browse Tasks
                  </Link>
                </li>
                {!isLoggedIn() ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          currentPath === "/"
                            ? `${currentPath}login`
                            : `${currentPath}/login`
                        }
                      >
                        Log in
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={
                          currentPath === "/"
                            ? `${currentPath}sign-up`
                            : `${currentPath}/sign-up`
                        }
                      >
                        Sign up
                      </Link>
                    </li> */}
                  </>
                ) : null}
                {isLoggedIn() ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={ACCOUNT_DASHBOARD_URL}>
                        Account
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        onClick={() => this.logout(history)}
                      >
                        Log out
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
        <Route exact to={`${location.pathname}/login`} component={Login} />
        {/* <Route exact to={`${location.pathname}/sign-up`} component={Signup} /> */}
      </>
    );
  }
}

const mapDistachToProps = dispatch => ({
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible))
});

export default connect(null, mapDistachToProps)(withRouter(Navigation));
