import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleVisible as handleVisibleAction } from "../redux/actions/loginAction";
import { login } from "../api/auth";
import { storeToken } from "../utils/auth";
import { getPreviousPath } from "../utils/helper";
import Modal from "react-animated-modal";
import TextField from "@material-ui/core/TextField";
import logo from "../img/logo.png";

class Signup extends Component {
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

  handleSignup = async () => {
    const { email, password } = this.state;
  };

  render() {
    const { visible, handleVisible, history } = this.props;
    const { errMsg } = this.state;

    return (
      <Modal
        visible={visible}
        closemodal={() => {
          handleVisible(false);
          const currentPath = this.props.location.pathname;
          const previousPath = getPreviousPath(currentPath);
          history.push(previousPath);
          // history.goBack(); //TODO 改成从location.pathname入手
        }}
        type="zoomInDown"
      >
        <div class="login-box">
          <div>
            <p class="login-title text-center">
              Sign up <img src={logo} alt="logo" />
            </p>
          </div>
          <p class="login-info-text text-center">- SIGN UP USING EMAIL -</p>
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
            <fieldset class="login-login-button-container">
              <Link className="login-login-button" onClick={this.handleSignup}>
                Sign up
              </Link>
            </fieldset>
          </form>
          <div class="login-link-container">
            <div class="login-right-links">
              <span class="login-info-text">Already have an account?</span>
              <Link class="login-create-account-link login-link">Log in</Link>
              {/*  <a class="login-create-account-link login-link" href="#">
                 Create Account
               </a> */}
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
  handleVisible: isVisible => dispatch(handleVisibleAction(isVisible))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
