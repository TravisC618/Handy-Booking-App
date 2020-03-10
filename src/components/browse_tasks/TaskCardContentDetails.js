import React from "react";
import { useSelector } from "react-redux";
import TaskCardContentDetailsHeader from "./TaskCardContentDetails_Header";
import TaskCardContentDetailsBody from "./TaskCardContentDetails_Body";
import TaskCardContentDetailsFooter from "./TaskCardContentDetails_Footer";
import "../../css/browse_tasks/TaskCardContentDetails.css";
import LoadingSpinner from "../../img/icons/LoadingSpinner.svg";

const TaskCardContentDetails = () => {
  const isLoading = useSelector(state => state.task.isLoading);

  return (
    <div className="TaskDetailsScroll">
      <div className="container-fluid">
        {isLoading && (
          <div className="loadingSpinner">
            <img src={LoadingSpinner} alt="LoadingSpinner" />
          </div>
        )}
        {!isLoading && (
          <div>
            <TaskCardContentDetailsHeader />
            <TaskCardContentDetailsBody />
            <TaskCardContentDetailsFooter />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCardContentDetails;
