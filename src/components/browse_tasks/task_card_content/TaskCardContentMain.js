import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "../../../css/browse_tasks/TaskCardContent.css";
import { Location, Calendar } from "../../../utils/Icons";
import { TASK_URL } from "../../../routes/URLMAP";

const TaskCardContentMain = props => {
  const toUpperCaseFilter = d => {
    return d.toUpperCase();
  };

  const { _id, title, budget, location, dueDate, status, offers } = props.tasks;

  const offerNum = offers.length;

  const offerString = () => {
    switch (offerNum) {
      case 0:
        return;
      case 1:
        return offerNum + " offer";
      default:
        return offerNum + " offers";
    }
  };

  return (
    <Link
      to={`${TASK_URL}/${_id}`}
      className="new-task-list-item new-task-list-item--open"
    >
      <div className="new-task-list-item__header">
        <span className="new-task-list-item__title">{title}</span>
        <div className="new-task-list-item__price">
          <span data-ui-test="price">${budget}</span>
        </div>
      </div>
      <div className="new-task-list-item__body">
        <div className="avatar-img new-task-list-item__avatar">
          <img
            src="https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2635472/image-80689ff6486e097bcb8569ba6fae617d.jpg /"
            alt=""
            width="32"
            height="32"
          />
        </div>
        <div className="new-task-list-item__location">
          <Location />
          <div className="new-task-list-item__detail">{location}</div>
        </div>
        <div className="new-task-list-item__date">
          <Calendar />
          <div className="new-task-list-item__detail">
            <Moment format="ddd, D MMM" filter={toUpperCaseFilter}>
              {dueDate}
            </Moment>
          </div>
        </div>
      </div>
      <div className="new-task-list-item__footer">
        <div className="row">
          <span className="new-task-list-item__status col-6">
            {status.toUpperCase()}
          </span>
          <span className="new-task-list-item__bids col-6">{offerString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default TaskCardContentMain;
