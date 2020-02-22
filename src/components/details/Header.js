import React from "react";
import cleaner from "../../img/cleaner.jpg";
import "../../css/details/header.css";

const Header = props => {
  return (
    <div className="header">
      <div className="header__head">
        <div className="header__head-bg"></div>

        <button className="header__head-btn"></button>

        <div className="header__head-avatar">
          <img
            src={cleaner}
            alt="cleaner's avatar" width="125px" height="125px"
            className="header__head-photo"
          />
          <div className="clearFix"></div>
        </div>

      </div>

      <div className="header__body">
      
        <div className="header__body-info">
          <h4 className="header__body-info-username">Allen M.</h4>
          <ul className="header__body-info-userinfo">
            <li>Last online 1 hour ago</li>
            <li>
              <i className="fas fa-map-marker-alt" />
              Butler WA 6036, Australia
            </li>
            <li>Member since 25th Apr 2016</li>
          </ul>
          <a>
            <i className="far fa-flag" />
            Report this member
          </a>
        </div>

        <div className="header__body-reviews">
          
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <div
              className="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              As a Tasker
            </div>
            <div
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              As a Poster
            </div>
          </div>
          <div className="clearFix"></div>
          

          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="review-container">  
                <div className="col-auto">
                  <div className="star-header">
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                  </div>
                  <div className="content-header">
                    <h4>4.9 stars from 96 reviews</h4>
                    <h5>98% Completion rate</h5>
                    <h6>106 Completion tasks</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <div className="review-container">  
                <div className="col-auto">
                  <div className="star-header">
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                  </div>
                  <div className="content-header">
                    <h5>4.9 stars from 96 reviews</h5>
                    <h5>98% Completion rate</h5>
                    <h5>106 Completion tasks</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
