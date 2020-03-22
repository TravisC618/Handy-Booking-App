import React from "react";
import TaskList from "./view_tasks/TaskList";
import "../../css/account/view-tasks.scss";
import { connect } from "react-redux";

const ViewTasks = props => {
  const { userRoleId } = props;
  return (
    <div className="view-tasks vertical-scroll">
      <div className="view-tasks-container">
        <div className="view-tasks__page">
          <TaskList userRoleId={userRoleId} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userRoleId: state.account.userRoleId
});

export default connect(mapStateToProps)(ViewTasks);
