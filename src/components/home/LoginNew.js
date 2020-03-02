import React from "react";
import wave from "../../img/login/wave.png";
import avatar from "../../img/login/login-avatar.svg";
import backgroundImg from "../../img/login/login-bg.svg";
// import "../../css/home/login.css";

class LoginNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: ""
    };
  }

  handleFocus = name => {
    this.setState({ focus: name });
  };

  render() {
    return (
      <section className="login-page container">
        <img className="wave" src={wave} alt="wave" />
        <div className="container">
          <div className="img">
            <img src={backgroundImg} alt="avatar" />
          </div>
          <div className="login-content">
            <form>
              <img src={avatar} />
              <h2>Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div>
                  <h5>Email</h5>
                  <input className="input" type="text" name="email" />
                </div>
              </div>
              <div className="input-div">
                <div className="i">
                  <i className="fas fa-lock" />
                </div>
                <div>
                  <h5>Password</h5>
                  <input className="input" type="passwordd" />
                </div>
              </div>
              <a href="#">Forgot Password</a>
              <input type="submit" className="submit-btn" value="Login" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginNew;
