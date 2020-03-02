import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import { login } from "../api/auth";
import Modal from "react-animated-modal";
import logo from "../img/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    login(email, password).then(data => {
      console.log(data);
    });
  };

  render() {
    const { visible, handleVisible, history } = this.props;

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
              <p href="#" class="social-button" id="facebook-connect">
                {" "}
                <span>Connect with Facebook</span>
              </p>
              <p href="#" class="social-button" id="google-connect">
                {" "}
                <span>Connect with Google</span>
              </p>
              <p href="#" class="social-button" id="twitter-connect">
                {" "}
                <span>Connect with Twitter</span>
              </p>
            </div>
          </div>
          <p class="login-info-text text-center">- OR USING EMAIL -</p>
          <form class="login-login-form">
            <fieldset class="login-input-container">
              <div class="login-input-item">
                <input
                  type="email"
                  class="login-user-input-email login-user-input"
                  name="email"
                  placeholder="Your Email Address"
                  onChange={this.handleChange}
                />
              </div>
              <div class="login-input-item">
                <input
                  type="password"
                  class="login-user-input-password login-user-input"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleChange}
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
              <Link className="login-login-button">Log in</Link>
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
