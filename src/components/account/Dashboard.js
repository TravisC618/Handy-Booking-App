import React from "react";
import "../../css/account/dashboard.css";

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
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Home Cleaning</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Full House Removals</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Few Items Removals</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Business & Admin</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Computers & IT</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Furniture Assembly</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Handyman</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Marketing & Design</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Event & Photography</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Fun & Quirky</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Home & Gardening</span>
                </div>
              </button>
            </div>
            <div className="item-bubble">
              <button className="bubble-container">
                <div className="bubble-circle"></div>
                <div className="bubble-text">
                  <span>Anything</span>
                </div>
              </button>
            </div>
          </div>
          <button className="post-button">Post a task</button>
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
                      <i class="fas fa-bullhorn"></i>
                    </div>
                    <div className="message-text">
                      <a href="/">Increase the task price</a>
                    </div>
                  </div>
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <i class="fas fa-bullhorn"></i>
                    </div>
                    <div className="message-text">
                      Just launched: Gasfitting & Plumbing Badges -
                      <a href="/">Add it to your profile</a>
                    </div>
                  </div>
                  <div className="marketing-message">
                    <div className="message-symbol">
                      <i class="fas fa-bullhorn"></i>
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
