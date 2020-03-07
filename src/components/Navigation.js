import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
// import { updateModelStatus as updateModelStatusAction } from "../redux/actions/loginAction";
// import { isIncluded } from "../utils/helper";
import logo from "../img/logo.png";
import { isIncluded } from "../utils/helper";
import Login from "./Login";
import { isLoggedIn } from "../utils/auth";
import { removeToken, removeUserId } from "../utils/auth";
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
    removeUserId();
    history.push(HOME_URL);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
    // if it doesn't contain "/login", return -1
    if (isIncluded(this.props.location.pathname, "/login")) {
      this.props.handleVisible(true);
    }

    const headerEl = document.getElementById("header");
    if (isIncluded(this.props.location.pathname, `${HOME_URL}`)) {
      headerEl.classList.add("fixed");
    } else {
      headerEl.classList.remove("stickied");
    }
  }

  componentDidUpdate() {
    // if it doesn't contain "/login", return -1
    if (isIncluded(this.props.location.pathname, "/login")) {
      this.props.handleVisible(true);
    }
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("header");

    if (distanceY > 200) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }

    if (distanceY > 15) {
      headerEl.classList.add("colored");
    } else {
      headerEl.classList.remove("colored");
    }
  }

  render() {
    const { history, visible, handleVisible } = this.props;

    return (
      <>
        {visible ? <Login /> : null}
        <nav
          id="header"
          className={`navbar fixed-top navbar-expand-md navbar-light `}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <h1 className="logo">BYEDUST</h1>
            </a>
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
