import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import logo from "../img/logo.png";
import Login from "./Login";
import {
  FIND_CLEANERS_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_BASE_URL,
  ACCOUNT_DASHBOARD_URL,
  LOGIN_URL
} from "../routes/URLMAP";
import "../css/navigation.css";
import "../css/login.scss";

class Navigation extends Component {
  render() {
    const { location, handleVisible, match } = this.props;
    const currentPath = location.pathname;
    return (
      <div>
        {/* <Login
        // showModal={this.state.showModal}
        // handleShowModal={this.handleShowModal}
        /> */}

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
                  <Link className="nav-link" to={ACCOUNT_DASHBOARD_URL}>
                    Account
                  </Link>
                </li>
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
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    // to={LOGIN_URL}
                    to={
                      currentPath === "/"
                        ? `${currentPath}login`
                        : `${currentPath}/login`
                    }
                    onClick={() => {
                      console.log(match);
                      handleVisible();
                    }}
                  >
                    Login/ Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Route to={`${location.pathname}/login`} component={Login} />
      </div>
    );
  }
}

const mapDistachToProps = dispatch => ({
  handleVisible: () => dispatch(handleVisibleAction())
});

export default connect(null, mapDistachToProps)(withRouter(Navigation));
