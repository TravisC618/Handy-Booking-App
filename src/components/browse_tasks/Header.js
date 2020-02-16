import React, { Component } from "react";
import Button from "./button"
import "./header.css";

class Header extends Component {
  render() {
    return (
        <ul class="nav nav-tabs justify-content-center">
        <li class="nav-item">
        <button class="task-nav-btn"><span>Account Settings</span>
            <div class="dropdown">
            <div class="container">
                <Button />
            </div>

            </div>
        </button>
        </li>
        </ul>
    );
  }
}



export default Header;
