import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import logo from '../img/logo.png';
import Modal from "react-animated-modal";
import '../css/login.css';

class Navigation extends Component {
    state = {
        showModal: false
    };
    render() {
      return (
        <div>
            <Modal visible={this.state.showModal} closemodal={()=> this.setState({ showModal: false })} type="zoomInDown" >
                <div class="login-box">
                    <div>
                        <p class="login-title text-center">Login to <img src={logo} alt="logo" /></p>
                    </div>
                    <div class="login-third-party-login">
                        <p class="login-button-info-text login-info-text text-center">EASILY USING</p>

                        <div class="social-login-button">
                            <p href="#" class="social-button" id="facebook-connect"> <span>Connect with Facebook</span></p>
                            <p href="#" class="social-button" id="google-connect"> <span>Connect with Google</span></p>
                            <p href="#" class="social-button" id="twitter-connect"> <span>Connect with Twitter</span></p>
                        </div>

                    </div>
                    <p class="login-info-text text-center">- OR USING EMAIL -</p>
                    <form class="login-login-form">
                        <fieldset class="login-input-container">
                            <div class="login-input-item">
                                <input type="email" class="login-user-input-email login-user-input" name="email" placeholder="Your Email Address" />
                            </div>
                            <div class="login-input-item">
                                <input type="password" class="login-user-input-password login-user-input" name="password" placeholder="Enter Password" />
                            </div>
                        </fieldset>
                        
                        <div class="remember-password-container">
                            <input type="checkbox" /><label><span class="login-info-text">Remember password?</span></label>
                        </div>
                        
                        <fieldset class="login-login-button-container">
                            <button class="login-login-button">Log in</button>
                        </fieldset>
                    </form>
                    <div class="login-link-container">
                        <a class="login-link" href="#">Recover password</a>
                        <div class="login-right-links">
                            <span class="login-info-text">New to BYEDUST ?</span>
                            <a class="login-create-account-link login-link" href="#">Create Account</a>
                        </div>
                    </div>
                </div>
            </Modal>
            <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <form className="form-inline">
                        <i className="fas fa-search" />
                        <input className="form-control mr-sm-2" type="search" placeholder="SEARCH BY POSTCODE" aria-label="Search" />
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/details">Browse Handy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={()=> this.setState({ showModal: true })}>Login/ Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
      );
    }
  }

export default Navigation;