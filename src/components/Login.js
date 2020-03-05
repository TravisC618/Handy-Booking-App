import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  handleVisible as handleVisibleAction,
  handleRedirect as handleRedirectAction
} from "../redux/actions/loginAction";
import { login } from "../api/auth";
import { storeToken } from "../utils/auth";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import logo from "../img/logo.png";
import { connect } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMsg: "",
      isLoading: false
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    const { redirectTo, handleVisible, handleRedirect, location } = this.props;
    const currentPath = location.pathname;

    this.setState({ errMsg: "", isLoading: true }, () => {
      login(email, password)
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
            this.setState({ errMsg: message });
          }
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    const { visible, handleVisible } = this.props;
    const { errMsg, isLoading } = this.state;

    return (
      <Modal
        visible={visible}
        closemodal={() => handleVisible(false)}
        type="zoomInDown"
      >
        <div className="login-box">
          <div>
            <p className="login-title text-center">
              Login to <img src={logo} alt="logo" />
            </p>
          </div>
          <div className="login-third-party-login">
            <p className="login-button-info-text login-info-text text-center">
              EASILY USING
            </p>

            <div className="social-login-button">
              <Link className="social-button" id="facebook-connect">
                {" "}
                <span>Connect with Facebook</span>
              </Link>
              <Link className="social-button" id="google-connect">
                {" "}
                <span>Connect with Google</span>
              </Link>
              <Link className="social-button" id="twitter-connect">
                {" "}
                <span>Connect with Twitter</span>
              </Link>
            </div>
          </div>
          <p className="login-info-text text-center">- OR USING EMAIL -</p>
          <form className="login-login-form">
            <fieldset className="login-input-container">
              <div className="login-input-item">
                <TextField
                  type="email"
                  name="email"
                  className="input-item-textfield"
                  error={errMsg ? true : false}
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
                  error={errMsg ? true : false}
                  helperText={errMsg ? errMsg : null}
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                  variant="outlined"
                />
              </div>
            </fieldset>
            <div className="remember-password-container">
              <input type="checkbox" />
              <label>
                <span className="login-info-text">Remember password?</span>
              </label>
            </div>
            <fieldset className="login-login-button-container">
              <Link className="login-login-button" onClick={this.handleLogin}>
                {isLoading ? <LoadingSpinner /> : "Log in"}
              </Link>
            </fieldset>
          </form>
          <div className="login-link-container">
            <Link className="login-link">Recover password</Link>
          </div>
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
