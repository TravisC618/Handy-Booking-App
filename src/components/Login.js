import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import { login } from "../api/auth";
import { storeToken } from "../utils/auth";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import { setAuthHeader } from "../api/axios";
import logo from "../img/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMsg: ""
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    login(email, password)
      .then(response => {
        const { token } = response.data.data;
        storeToken(token);
        //TODO 可以设计成登陆后redirect到account
        const locationState = this.props.location.state;
        const redirectTo = (locationState && locationState.from) || "/";
        this.props.history.replace(redirectTo);
        this.setState({ errMsg: "" });
      })
      .catch(error => {
        if (error.response) {
          const { message } = error.response.data;
          this.setState({ errMsg: message });
        }
      });
  };

  render() {
    const { visible, handleVisible, history } = this.props;
    const { errMsg } = this.state;

    return (
      <Modal
        visible={visible}
        closemodal={() => {
          handleVisible();
          history.goBack();
        }}
        type="zoomInDown"
      >
        <div class="login-box">
          <div>
            <p class="login-title text-center">
              Login to <img src={logo} alt="logo" />
            </p>
          </div>
          <div class="login-third-party-login">
            <p class="login-button-info-text login-info-text text-center">
              EASILY USING
            </p>

            <div class="social-login-button">
              <a href="#" class="social-button" id="facebook-connect">
                {" "}
                <span>Connect with Facebook</span>
              </a>
              <a href="#" class="social-button" id="google-connect">
                {" "}
                <span>Connect with Google</span>
              </a>
              <a href="#" class="social-button" id="twitter-connect">
                {" "}
                <span>Connect with Twitter</span>
              </a>
            </div>
          </div>
          <p class="login-info-text text-center">- OR USING EMAIL -</p>
          <form class="login-login-form">
            <fieldset class="login-input-container">
              <div class="login-input-item">
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
              <div class="login-input-item">
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

            <div class="remember-password-container">
              <input type="checkbox" />
              <label>
                <span class="login-info-text">Remember password?</span>
              </label>
            </div>

            <fieldset class="login-login-button-container">
              <Link className="login-login-button" onClick={this.handleLogin}>
                Log in
              </Link>
              {/* <button
                class="login-login-button"
                onClick={null}
                // onClick={event => {
                //   debugger;
                //   this.handleLogin(event);
                // }}
              >
                Log in
              </button> */}
            </fieldset>
          </form>
          <div class="login-link-container">
            <a class="login-link" href="#">
              Recover password
            </a>
            <div class="login-right-links">
              <span class="login-info-text">New to BYEDUST ?</span>
              <a class="login-create-account-link login-link" href="#">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.login.visible
});

const mapDispatchToProps = dispatch => ({
  handleVisible: () => dispatch(handleVisibleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
