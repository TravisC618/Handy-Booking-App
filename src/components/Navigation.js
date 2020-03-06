import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";

// import { updateModelStatus as updateModelStatusAction } from "../redux/actions/loginAction";
// import { isIncluded } from "../utils/helper";
import logo from "../img/logo.png";
import Login from "./Login";
import { isLoggedIn } from "../utils/auth";
import { removeToken } from "../utils/auth";
import {
  HOME_URL,
  CLEANER_DETAILS_URL,
  TASK_URL,
  ACCOUNT_DASHBOARD_URL
} from "../routes/URLMAP";
import "../css/navigation.css";
import "../css/login.scss";

class Navigation extends Component {
  logout = history => {
    removeToken();
    history.push(HOME_URL);
  };

  render() {
    const { history, visible, handleVisible } = this.props;

    return (
      <>
        {visible ? <Login /> : null}
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
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={() => handleVisible(true)}
                    >
                      Log in/Register
                    </Link>
                  </li>
                ) : (
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
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.login.visible
});

const mapDistachToProps = dispatch => ({
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible))
});

export default connect(
  mapStateToProps,
  mapDistachToProps
)(withRouter(Navigation));
