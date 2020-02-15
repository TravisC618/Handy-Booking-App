import React, { Component } from "react";
import Modal from "react-animated-modal";
import logo from "../img/logo.png";

class Login extends Component {
  render() {
    const { showModal, handleShowModal } = this.props;
    return (
      <Modal
        visible={showModal}
        closemodal={() => handleShowModal()}
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
                />
              </div>
              <div class="login-input-item">
                <input
                  type="password"
                  class="login-user-input-password login-user-input"
                  name="password"
                  placeholder="Enter Password"
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
              <button class="login-login-button">Log in</button>
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

export default Login;
