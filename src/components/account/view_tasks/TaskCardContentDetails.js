import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TaskCardContentDetailsHeader from "../../browse_tasks/task_card_content/TaskCardContentDetails_Header";
import TaskCardContentDetailsBody from "../../browse_tasks/task_card_content/TaskCardContentDetails_Body";
import TaskCardContentDetailsFooter from "../../browse_tasks/task_card_content/TaskCardContentDetails_Footer";
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

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));

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
      dispatch({ type: UPDATE_LOADING_STATE });
    }
  }

  useEffect(() => {
    fetchTaskDetail();
  }, [taskId]);

  const [isOpen, setIsOpen] = React.useState(true);

  const classes = useStyles();

  return (
    <Modal
      open={isOpen}
      onClose={props.history.goBack}
      closeAfterTransition
      className={classes.modal}
      BackdropProps={{
        timeout: 500
      }}
    >
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
    </Modal>
  );
};

export default withRouter(TaskCardContentDetails);
