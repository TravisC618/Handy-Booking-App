import React, {useContext} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Moment from "react-moment";
import "../../css/browse_tasks/TaskCardContent.css";
import { Location, Calendar } from "../../utils/Icons";
import {DetailContext} from "../../hooks/detailReducer";
import { TASK_URL } from "../../routes/URLMAP";

const TaskCardContent = (props) => {

  const detailContext = useContext(DetailContext);
  const dispatch = detailContext.detailDispatch;

  const toUpperCaseFilter = d => {
    return d.toUpperCase();
  };

  const {
    _id,
    title,
    budget,
    location,
    dueDate,
    status,
    offerNum
  } = props.tasks;

  console.log(_id)
  
  // {`${TASK_URL}/${title}`}
  return (
    <Link to={`${TASK_URL}/${_id}`} class="new-task-list-item new-task-list-item--open">
      <div class="new-task-list-item__header">
        <span class="new-task-list-item__title">{title}</span>
        <div class="new-task-list-item__price">
          <span data-ui-test="price">${budget}</span>
        </div>
      </div>
      <div class="new-task-list-item__body">
        <div class="avatar-img new-task-list-item__avatar">
          <img
            src="https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2635472/image-80689ff6486e097bcb8569ba6fae617d.jpg /"
            alt=""
            width="32"
            height="32"
          />
        </div>
        <div class="new-task-list-item__location">
          <Location />
          <div class="new-task-list-item__detail">{location}</div>
        </div>
        <div class="new-task-list-item__date">
          <Calendar />
          <div class="new-task-list-item__detail">
            <Moment format="ddd, D MMM" filter={toUpperCaseFilter}>
              {dueDate}
            </Moment>
          </div>
        </div>
      </div>
      <div class="new-task-list-item__footer">
        <div class="row">
          <span class="new-task-list-item__status col-6">{status}</span>
          <span class="new-task-list-item__bids col-6">{offerNum} offer</span>
        </div>
      </div>
    </Link>
  );
}




export default TaskCardContent;
