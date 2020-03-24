import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";

import "../../css/details/header.css";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
    boxShadow: "none",
    backgroundColor: "inherit"
  },
  avatar: {
    height: 125,
    width: 125,
    flexShrink: 0,
    flexGrow: 0,
    border: "4px solid white",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
    margin: "0 auto"
  }
}));

const Header = props => {
  const classes = useStyles();

  const user = {
    name: "Shen Z.",
    city: "Newcastle West",
    state: "NSW",
    postcode: "2302",
    country: "Australia",
    timezone: "GMT+11",
    avatar: "../../img/cleaner.jpg"
  };

  return (
    <div className="header">
      <div className="header__head">
        <div className="header__head-bg"></div>

        <Link to="/find-cleaners">
          <button className="header__head-btn"></button>
        </Link>

        <div className="header__head-avatar">
          <Avatar
            src={user.avater}
            alt="cleaner's avatar"
            className={classes.avatar}
          />
          <div className="clearFix"></div>
        </div>
      </div>

      <div className="header__body">
        <div className="header__body-info">
          <h4 className="header__body-info-username">{user.name}</h4>
          <ul className="header__body-info-userinfo">
            <li>Last online 1 hour ago</li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {user.city} {user.state} {user.postcode}, {user.country}
            </li>
            <li>Member since 25th Apr 2016</li>
          </ul>
          <div className="header__body-info-report">
            <FontAwesomeIcon icon={faFlag} />
            <Link to="/#">Report this member</Link>
          </div>
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
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
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

            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
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
