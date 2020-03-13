import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
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
import "../css/navigation.scss";
import "../css/login.scss";
import CreateProfile from "../components/create_profile/CreateProfile"

class Navigation extends Component {
  state = {
    showModal: false
  };
  handleShowModal = () => {
    this.setState({ showModal: false });
  };

  logout = history => {
    removeToken();
    removeUserId();
    history.push(HOME_URL);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);

    const headerEl = document.getElementById("header");
    if (isIncluded(this.props.location.pathname, `${HOME_URL}`)) {
      headerEl.classList.add("fixed");
    } else {
      headerEl.classList.remove("stickied");
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

  renderLogin() {
    const { history, handleVisible } = this.props;

    if (isLoggedIn()) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to={ACCOUNT_DASHBOARD_URL}>
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={() => this.logout(history)}>
              Log out
            </Link>
          </li>
        </>
      );
    }

    return (
      <li className="nav-item">
        <Link className="nav-link" onClick={() => handleVisible(true)}>
          Log in/Register
        </Link>
      </li>
    );
  }

  render() {
    const { location, visible } = this.props;
    const currentPath = location.pathname;
    const navClasses = classnames(
      "navbar",
      "fixed-top",
      "navbar-expand-md",
      "navbar-light",
      {
        other: currentPath !== "/",
        post: currentPath === "/find-cleaners"
      }
    );

    return (
      <>
        <CreateProfile
          showModal={this.state.showModal}
          handleShowModal={this.handleShowModal}
        />
        {visible ? <Login /> : null}
        <nav id="header" className={navClasses}>
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
                  {/* Create Profile */}
                  <Link
                    className="nav-link"
                    onClick={() => this.setState({ showModal: true })}
                  >
                    Create Profile
                  </Link>

                  <Link className="nav-link" to={CLEANER_DETAILS_URL}>
                    Browse Handy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={TASK_URL}>
                    Browse Tasks
                  </Link>
                </li>
                {this.renderLogin()}
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
