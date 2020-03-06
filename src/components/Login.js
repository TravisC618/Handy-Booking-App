import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  handleVisible as handleVisibleAction,
  handleRedirect as handleRedirectAction
} from "../redux/actions/loginAction";
import { login, register } from "../api/auth";
import { storeToken } from "../utils/auth";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import { errHandler } from "../utils/helper";
import "../css/login.scss";
import SocialLogin from "./SocialLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPwd: "",
      username: "",
      checkbox: false,
      err: { type: "", msg: "" },
      isLoading: false,
      switchToRegister: false
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  /**
   * switch between login and register
   */
  handleToggle = () => {
    //TODO clear form
    this.setState(state => ({
      switchToRegister: !state.switchToRegister,
      email: "",
      password: "",
      repeatPwd: "",
      username: "",
      checkbox: false,
      isLoading: false,
      err: {
        type: "",
        msg: ""
      }
    }));
  };

  /**
   * userBehavior - login/register
   */
  handleUserBehavior = async () => {
    const {
      email,
      password,
      repeatPwd,
      username,
      checkbox,
      switchToRegister
    } = this.state;
    const { redirectTo, handleVisible, handleRedirect, location } = this.props;
    const currentPath = location.pathname;
    const userBehavior = () =>
      switchToRegister
        ? register(email, password, username)
        : login(email, password);

    if (switchToRegister && password !== repeatPwd) {
      this.setState({
        err: { type: "password", msg: '"Passwords" do not match' }
      });
      return;
    }

    if (switchToRegister && !checkbox) {
      this.setState({
        err: {
          type: "checkbox",
          msg: "You should accept the terms above"
        }
      });
      return;
    }

    this.setState({ err: {}, isLoading: true }, () => {
      userBehavior()
        .then(response => {
          this.setState({ isLoading: false }, () => {
            const { token } = response.data.data;
            storeToken(token);
            this.props.history.replace(redirectTo ? redirectTo : currentPath);
            redirectTo && handleRedirect(""); // reset redirectTo
            handleVisible(false);
          });
        })
        .catch(error => {
          if (error.response) {
            const { message } = error.response.data;
            this.setState({ err: errHandler(message) });
          }
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    const { visible, handleVisible } = this.props;
    const { err, isLoading, switchToRegister } = this.state;

    return (
      <Modal
        visible={visible}
        closemodal={() => handleVisible(false)}
        type="zoomInDown"
      >
        <div className="login-box">
          <div className="login-box-header">
            <div className="login-box-header__left">
              <p className="login-info-text text-center">
                {switchToRegister ? "Register with" : "USING EMAIL"}
              </p>
            </div>
            <div className="login-box-header__right">
              <p className="login-info-text text-center">
                {switchToRegister ? "Are you a member?" : "Not a member yet?"}
              </p>
              <Link className="login-link" onClick={this.handleToggle}>
                {switchToRegister ? "Login now" : "Register now"}
              </Link>
            </div>
          </div>
          <form className="login-login-form">
            <fieldset className="login-input-container">
              {switchToRegister ? (
                <div className="login-input-item">
                  <TextField
                    type="username"
                    name="username"
                    className="input-item-textfield"
                    error={err.type === "username"}
                    helperText={err.type === "username" ? err.msg : null}
                    placeholder="Username"
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </div>
              ) : null}
              <div className="login-input-item">
                <TextField
                  type="email"
                  name="email"
                  className="input-item-textfield"
                  error={err.type === "email"}
                  helperText={err.type === "email" ? err.msg : null}
                  placeholder="Your Email Address"
                  onChange={this.handleChange}
                  variant="outlined"
                />
              </div>
              <div className="login-input-item">
                <TextField
                  type="password"
                  name="password"
                  className="input-item-textfield"
                  error={err.type === "password"}
                  helperText={err.type === "password" ? err.msg : null}
                  placeholder="Password"
                  onChange={this.handleChange}
                  variant="outlined"
                />
              </div>
              {switchToRegister ? (
                <div className="login-input-item">
                  <TextField
                    type="password"
                    name="repeatPwd"
                    className="input-item-textfield"
                    error={err.type === "password"}
                    helperText={err.type === "password" ? err.msg : null}
                    placeholder="Repeat Password"
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </div>
              ) : null}
            </fieldset>
            <div className="remember-password-container">
              <input
                type="checkbox"
                onClick={() =>
                  this.setState(state => ({ checkbox: !state.checkbox }))
                }
              />
              <label>
                <span className="login-info-text">
                  {switchToRegister ? (
                    <>
                      I accept the
                      <Link className="login-link"> Terms and Conditions </Link>
                      and
                      <Link className="login-link"> Privacy Policy </Link>
                    </>
                  ) : (
                    "Keep me logged in"
                  )}
                </span>
              </label>
              {err.type === "checkbox" ? (
                <span className="err-msg">* {err.msg}</span>
              ) : null}
            </div>
            <fieldset className="login-login-button-container">
              {switchToRegister ? (
                <Link
                  className="login-login-button"
                  onClick={this.handleUserBehavior}
                >
                  {isLoading ? <LoadingSpinner /> : "Create your account"}
                </Link>
              ) : (
                <Link
                  className="login-login-button"
                  onClick={this.handleUserBehavior}
                >
                  {isLoading ? <LoadingSpinner /> : "Log in"}
                </Link>
              )}
            </fieldset>
          </form>
          {switchToRegister ? null : (
            <div className="login-link-container">
              <Link className="login-link">Recover password</Link>
            </div>
          )}
          <SocialLogin />
        </div>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  visible: state.login.visible,
  redirectTo: state.login.redirectTo
});

const mapDispatchToProps = dispatch => ({
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible)),
  handleRedirect: redirectTo => dispatch(handleRedirectAction(redirectTo))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
