import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import {
  handleVisible as handleVisibleAction,
  handleRedirect as handleRedirectAction
} from "../redux/actions/loginAction";
import { updateRegisterForm as updateRegisterFormAction } from "../redux/actions/registerAction";
import { storeToken, storeUserId, storeRoleId } from "../utils/auth";
import { login, register, checkEmailExisted } from "../api/auth";
import Modal from "react-animated-modal";
import validator from "validator";
import LoadingSpinner from "../UI/LoadingSpinner";
import LinearIndeterminate from "../UI/LinearIndeterminate";
import Button from "@material-ui/core/Button";
import { errHandler } from "../utils/helper";
import "../css/login.scss";
import SocialLogin from "./SocialLogin";
import CreateProfile from "../components/create_profile/CreateProfile";
import LoginInput from "./LoginInput";

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

  registerValidator = () => {
    const { email, username, password, repeatPwd, checkbox } = this.state;
    let isError = false;
    this.setState({ err: {} });

    if (!validator.isLength(username, { min: 3 })) {
      this.setState({
        err: {
          type: "username",
          msg: "Username should be at least 3 characters"
        }
      });
      isError = true;
      return isError;
    }

    if (!validator.isEmail(email)) {
      this.setState({
        err: { type: "email", msg: "Invalid email format" }
      });
      isError = true;
      return isError;
    }

    if (!validator.isLength(password, { min: 6 })) {
      this.setState({
        err: {
          type: "password",
          msg: "Password is too simple, try another one"
        }
      });
      isError = true;
      return isError;
    }

    if (password !== repeatPwd) {
      this.setState({
        err: { type: "password", msg: "Passwords do not match" }
      });
      isError = true;
      return isError;
    }

    if (!checkbox) {
      this.setState({
        err: {
          type: "checkbox",
          msg: "You should accept the terms above"
        }
      });
      isError = true;
      return isError;
    }

    return isError;
  };

  handleRedirect = (redirectTo, role, currentPath) => {
    if (redirectTo === "/find-cleaners" && role !== "customer") {
      this.props.history.replace("/");
      return;
    }

    this.props.history.replace(redirectTo ? redirectTo : currentPath);
  };

  /**
   * userBehavior - login/register
   */
  handleLogin = async () => {
    const { email, password } = this.state;
    const {
      redirectTo,
      handleRedirect,
      handleVisible,
      location: { pathname: currentPath }
    } = this.props;

    this.setState({ err: {}, isLoading: true }, () => {
      login(email, password)
        .then(response => {
          this.setState({ isLoading: false }, () => {
            const { token, userId, role, roleId } = response.data.data;
            storeToken(token);
            storeUserId(userId);
            storeRoleId(role, roleId);

            this.handleRedirect(redirectTo, role, currentPath);
            redirectTo && handleRedirect(""); // reset redirectTo

            handleVisible(false);
          });
        })
        .catch(error => {
          if (error.response) {
            const { message } = error.response.data;
            this.setState({ err: errHandler(message), isLoading: false });
          }
        });
    });
  };

  handleRegister = () => {
    const {
      updateRegisterStatus,
      handleShowModal,
      handleVisible,
      updateRegisterForm
    } = this.props;
    const { email, password, username } = this.state;
    if (this.registerValidator()) return;

    this.setState({ err: {}, isLoading: true }, () => {
      checkEmailExisted(email)
        .then(response => {
          this.setState({ isLoading: false }, () => {
            updateRegisterForm({ email, password, username });
            updateRegisterStatus(true);
            handleShowModal(true);
            handleVisible(false);
          });
        })
        .catch(error => {
          if (error.response) {
            const { message } = error.response.data;
            this.setState({ err: errHandler(message), isLoading: false });
          }
        });
    });
  };

  renderInput = () => {
    const inputTypes = this.state.switchToRegister
      ? ["username", "email", "password", "repeatPwd"]
      : ["email", "password"];
    return inputTypes.map(type => (
      <LoginInput
        name={type}
        err={this.state.err}
        handleChange={this.handleChange}
      />
    ));
  };

  renderInfoText = () => {
    const loginInfo = "Keep me logged in";

    if (this.state.switchToRegister) {
      return (
        <>
          I accept the
          <Link className="login-link"> Terms and Conditions </Link>
          and
          <Link className="login-link"> Privacy Policy </Link>
        </>
      );
    }

    return loginInfo;
  };

  handleCheckBox = () => {
    this.setState(state => ({ checkbox: !state.checkbox }));
  };

  render() {
    const { visible, handleVisible } = this.props;
    const { err, switchToRegister, isLoading } = this.state;
    const linkClasses = classnames("login-login-button", {
      disabled: isLoading
    });

    return (
      <React.Fragment>
        <Modal
          visible={visible}
          closemodal={() => handleVisible(false)}
          type="pulse"
        >
          {isLoading && <LinearIndeterminate />}
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
                {this.renderInput()}
              </fieldset>
              <div className="remember-password-container">
                <input type="checkbox" onClick={this.handleCheckBox} />
                <label>
                  <span className="login-info-text">
                    {this.renderInfoText()}
                  </span>
                </label>
                {err.type === "checkbox" && (
                  <span className="err-msg">* {err.msg}</span>
                )}
              </div>
              <fieldset className="login-login-button-container">
                <Link
                  className={linkClasses}
                  onClick={() => {
                    switchToRegister
                      ? this.handleRegister()
                      : this.handleLogin();
                  }}
                >
                  {switchToRegister ? "Create your account" : "Log in"}
                </Link>
              </fieldset>
            </form>
            {!switchToRegister && (
              <div className="login-link-container">
                <Link className="login-link">Recover password</Link>
              </div>
            )}
            <SocialLogin />
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  visible: state.login.visible,
  redirectTo: state.login.redirectTo
});

const mapDispatchToProps = dispatch => ({
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible)),
  handleRedirect: redirectTo => dispatch(handleRedirectAction(redirectTo)),
  updateRegisterForm: registerForm =>
    dispatch(updateRegisterFormAction(registerForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
