import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  handleVisible as handleVisibleAction,
  handleRedirect as handleRedirectAction
} from "../redux/actions/loginAction";
import { storeToken, storeUserId } from "../utils/auth";
import { login, register } from "../api/auth";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import LoadingSpinner from "../UI/LoadingSpinner";
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

  registerErrorHandling = () => {
    const { password, repeatPwd, checkbox } = this.state;
    let isError = false;

    if (password !== repeatPwd) {
      this.setState({
        err: { type: "password", msg: '"Passwords" do not match' }
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

  /**
   * userBehavior - login/register
   */
  handleUserBehavior = async () => {
    const { email, password, username, switchToRegister } = this.state;
    const { redirectTo, handleVisible, handleRedirect, location } = this.props;
    const currentPath = location.pathname;
    const userBehavior = () =>
      switchToRegister
        ? register(email, password, username)
        : login(email, password);

    if (switchToRegister && this.registerErrorHandling()) return;

    this.setState({ err: {}, isLoading: true }, () => {
      userBehavior()
        .then(response => {
          this.setState({ isLoading: false }, () => {
            const { token, userId } = response.data.data;
            storeToken(token);
            storeUserId(userId);

            this.props.history.replace(redirectTo ? redirectTo : currentPath);
            redirectTo && handleRedirect(""); // reset redirectTo

            this.props.handleShowModal();

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

  renderLoginButton = () => {
    if (this.state.isLoading) return <LoadingSpinner />;

    return this.state.switchToRegister ? "Create your account" : "Log in";
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
    const { err, switchToRegister } = this.state;

    return (
      <React.Fragment>
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
                  className="login-login-button"
                  onClick={this.handleUserBehavior}
                >
                  {this.renderLoginButton()}
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
  handleRedirect: redirectTo => dispatch(handleRedirectAction(redirectTo))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
