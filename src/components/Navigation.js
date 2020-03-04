import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import logo from "../img/logo.png";
import Login from "./Login";
import "../css/navigation.css";
import "../css/login.scss";

class Navigation extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
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
    const { location, handleVisible } = this.props;
    const currentPath = location.pathname;
    return (
      <div>
        {/* <Login
        // showModal={this.state.showModal}
        // handleShowModal={this.handleShowModal}
        /> */}

        <nav id="header" className="navbar navbar-expand-md navbar-light fixed-top">
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
                  <Link className="nav-link" to="/account/dashboard">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/details">
                    Browse Handy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    Browse Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={
                      currentPath === "/"
                        ? `${currentPath}login`
                        : `${currentPath}/login`
                    }
                    onClick={() => handleVisible()}
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
