import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import TaskCardContentDetailsHeader from "./TaskCardContentDetails_Header";
import TaskCardContentDetailsBody from "./TaskCardContentDetails_Body";
import TaskCardContentDetailsFooter from "./TaskCardContentDetails_Footer";
import { TASK_URL } from "../../../routes/URLMAP";
import {
  UPDATE_LOADING_STATE,
  UPDATE_DETAIL_STATE
} from "../../../redux/actions/taskAction";
import { reqGetTask } from "../../../api/tasks";
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

const TaskCardContentDetails = props => {
  const isFetchingDetails = useSelector(state => state.task.isFetchingDetails);
  const isDetailOn = useSelector(state => state.task.isDetailOn);
  const dispatch = useDispatch();
  const {
    match: {
      params: { taskId }
    },
    history
  } = props;

  async function fetchTaskDetail() {
    try {
      dispatch({ type: UPDATE_LOADING_STATE });
      const response = await reqGetTask(taskId);
      const taskDetails = response.data.data;
      dispatch({ type: UPDATE_DETAIL_STATE, taskDetails });
      dispatch({ type: UPDATE_LOADING_STATE });
    } catch (error) {
      history.push(TASK_URL);
      dispatch({ type: UPDATE_LOADING_STATE });
    }
  }

  useEffect(() => {
    fetchTaskDetail();
  }, [taskId]);

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

export default withRouter(TaskCardContentDetails);
