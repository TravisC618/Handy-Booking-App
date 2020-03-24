import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import TaskCardContentDetailsHeader from "./TaskCardContentDetails_Header";
import TaskCardContentDetailsBody from "./TaskCardContentDetails_Body";
import TaskCardContentDetailsFooter from "./TaskCardContentDetails_Footer";
import {
  UPDATE_LOADING_STATE,
  UPDATE_DETAIL_STATE
} from "../../../redux/actions/taskAction";
import { reqGetTask } from "../../../api/tasks";
import "../../../css/browse_tasks/TaskCardContentDetails.scss";
import OfferModel from "./offer/OfferModel";
import {
  TASK_URL,
  ADD_TASK_OFFER_URL,
  ASSIGN_TASK_URL,
  ACCOUNT_BASE_URL,
  VIEW_TASK_URL,
  CHAT_URL
} from "../../../routes/URLMAP";
import { getRoleId, isLoggedIn } from "../../../utils/auth";
import AcceptOfferModel from "./accept_offer/AcceptOfferModel";
import ChatBox from "../../account/chat_app/ChatBox";
import { isIncluded } from "../../../utils/helper";

const renderRoute = (currentPath, isJoining) => {
  if (!isLoggedIn()) {
    console.log("you are not login");
    return;
  }
  let acceptPath;
  let chatPath;
  if (isIncluded(currentPath, ACCOUNT_BASE_URL)) {
    acceptPath = `${ACCOUNT_BASE_URL}/:customerId${VIEW_TASK_URL}/:taskId/:customerId${ASSIGN_TASK_URL}/:tradieId`;
    chatPath = `${ACCOUNT_BASE_URL}/:customerId${VIEW_TASK_URL}/:taskId${CHAT_URL}/:userId`;
  } else {
    acceptPath = `${TASK_URL}/:taskId/:customerId${ASSIGN_TASK_URL}/:tradieId`;
  }

  // for customer
  if (getRoleId("customer")) {
    return (
      <>
        <Route
          // path={`/account/:customerId/view-tasks/:taskId/:customerId/assign-task/:tradieId`}
          path={acceptPath}
          component={AcceptOfferModel}
        />
        {/* {!isJoining && <Route path={chatPath} component={ChatBox} />} */}
        <Route path={chatPath} component={ChatBox} />
      </>
    );
  }
  // for tradie
  return (
    <>
      <Route
        path={`${TASK_URL}/:taskId${ADD_TASK_OFFER_URL}/:tradieId`}
        component={OfferModel}
      />
      {/* {!isJoining && } */}
      <Route path={chatPath} component={ChatBox} />
    </>
  );
};

const renderContent = (isFetchingDetails, currentPath, isJoining) => {
  return (
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
            {renderRoute(currentPath, isJoining)}
          </div>
        )}
      </div>
    </div>
  );
};

const TaskCardContentDetails = props => {
  const isFetchingDetails = useSelector(state => state.task.isFetchingDetails);
  const isDetailOn = useSelector(state => state.task.isDetailOn);
  const isJoining = useSelector(state => state.chat.isJoining);

  const dispatch = useDispatch();
  const {
    match: {
      path: currentPath,
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
      <div>{renderContent(isFetchingDetails, currentPath, isJoining)}</div>
    </Slide>
  );
};

export default withRouter(TaskCardContentDetails);
