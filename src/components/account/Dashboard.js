import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVideo,
  faLaptop,
  faBusinessTime,
  faBroom,
  faTruckMoving,
  faBoxOpen,
  faCouch,
  faTools,
  faCrop,
  faSeedling,
  faFootballBall
} from "@fortawesome/free-solid-svg-icons";

import "../../css/account/dashboard.css";
import "../../css/home/buttongroup.css";

const Dashboard = props => {
  return (
    <div className="dashboard vertical-scroll">
      <div className="dashboard__page">
        <div className="dashboard__page-header">
          <h4>Dashboard</h4>
        </div>
        <div className="task-container">
          <h3>Get it done today</h3>
          <p>
            To-do list never getting shorter? Take the burden off and find the
            help you need on Airtasker.
          </p>
          <div className="task-item">
            {/* <div className="item-bubble"> */}
            {/* <button className="bubble-container"> */}
            {/* <div className="bubble-circle">
                      <div className="bubble-text"> */}
            <div className="BG-container">
              <div className="middle">
                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faBroom} />
                  </a>
                  <p>Home Cleaning</p>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </button> */}
                {/* </div> */}

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faTruckMoving} />
                  </a>
                  <p>Full House Removal</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faBoxOpen} />
                  </a>
                  <p>Few Items Removal</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faBusinessTime} />
                  </a>
                  <p>Business & Admin</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faLaptop} />
                  </a>
                  <p>Computers & IT</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faCouch} />
                  </a>
                  <p>Furniture Assembly</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faTools} />
                  </a>
                  <p>Handyman</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faCrop} />
                  </a>
                  <p>Marketing & Design</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faVideo} />
                  </a>
                  <p>Event & Photography</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faMusic} />
                  </a>
                  <p>Fun & Quirky</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faSeedling} />
                  </a>
                  <p>Home & Gardening</p>
                </div>

                <div className="bg-btn-container">
                  <a className="bg-btn" href="#">
                    <FontAwesomeIcon className="icon" icon={faFootballBall} />
                  </a>
                  <p>Anything</p>
                </div>
              </div>
            </div>
          </div>

          <Link className="post-button" to="/find-cleaners">
            Post a task
          </Link>
        </div>

        <div className="dashboard-banner">
          <div className="banner-container">
            <div className="banner-logo">
              <span>Now Available!</span>
            </div>
            <div className="banner-text">
              <ul className="banner-block">
                <li>
                  <div className="banner-block-item">
                    <div className="banner-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="banner-list">
                      <span>Get it done now. Pay later.</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-block-item">
                    <div className="banner-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="banner-list">
                      <span>Repay in 4 fortnightly instalments</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-block-item">
                    <div className="banner-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="banner-list">
                      <span>No interest</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-block-item">
                    <div className="banner-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <div className="banner-list">
                      <span>Available on payments up to $1,500</span>
                    </div>
                  </div>
                </li>
              </ul>
              <span className="banner-more">
                <a target="_blank" href="" className="more-link">
                  Learn More
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="account-inner">
          <div className="account-inner">
            <div className="panel-titile">
              <div className="message-block">
                <h5 className="center">Airtasker Announcements</h5>
                <div className="inner">
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <span className="new">NEW</span>
                    </div>
                    <div className="message-text">
                      Lower fees for bigger tasks — that’s right!
                      <a href="/">Find out more</a>
                    </div>
                  </div>
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className="message-text">
                      <a href="/">Increase the task price</a>
                    </div>
                  </div>
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className="message-text">
                      Just launched: Gasfitting & Plumbing Badges -
                      <a href="/">Add it to your profile</a>
                    </div>
                  </div>
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <div className="message-text">
                      Just launched: Working with Children Badge -
                      <a href="/">Add it to your profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
