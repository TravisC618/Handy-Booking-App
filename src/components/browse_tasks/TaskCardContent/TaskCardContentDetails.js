import React from "react";
import { useSelector } from "react-redux";
import Slide from "@material-ui/core/Slide";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import TaskCardContentDetailsHeader from "./TaskCardContentDetails_Header";
import TaskCardContentDetailsBody from "./TaskCardContentDetails_Body";
import TaskCardContentDetailsFooter from "./TaskCardContentDetails_Footer";
import "../../../css/browse_tasks/TaskCardContentDetails.scss";

const renderContent = isFetchingDetails => (
  <div className="task-details-scroll">
    <div className="container-fluid">
      {isFetchingDetails ? (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <TaskCardContentDetailsHeader />
          <TaskCardContentDetailsBody />
          <TaskCardContentDetailsFooter />
        </div>
      )}
    </div>
  </div>
);

const TaskCardContentDetails = () => {
  const isFetchingDetails = useSelector(state => state.task.isFetchingDetails);
  const isDetailOn = useSelector(state => state.task.isDetailOn);

  return (
    <Slide
      in={isDetailOn}
      direction="left"
      mountOnEnter
      unmountOnExit
      style={{ transformOrigin: "0 0 0" }}
      {...(isDetailOn && { timeout: 1000 })}
    >
      <div>{renderContent(isFetchingDetails)}</div>
    </Slide>
  );
};

export default TaskCardContentDetails;
