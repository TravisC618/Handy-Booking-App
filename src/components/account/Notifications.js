import React from "react";
import { Link } from "react-router-dom";

import notifications from "../../img/notifications.webp";
import "../../css/account/notifications.css";

const Notifications = props => {
  return (
    <div className="notifications vertical-scroll">
      <div className="notifications-container">
        <div className="notifications__page">
          <img
            src={notifications}
            alt="no_results"
            className="page__EmptyImg"
          />
          <p className="page__text">
            This is where we'll let you know about tasks, comments and other
            stuff. Let's post a task or make an offer!
          </p>
          <Link className="page__button" to="/find-cleaners">
            Post a task
          </Link>
          <Link className="page__Link" to="/tasks">
            Browse tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
