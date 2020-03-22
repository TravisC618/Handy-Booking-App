import React from "react";
import { useSelector } from "react-redux";
import "../../../css/browse_tasks/TaskCardContentDetails_Header__NavBar.scss";
import "../../../css/browse_tasks/following-button.css";

const TaskDetailHeader = props => {
  const status = useSelector(state => state.task.taskDetails.status);
  return (
    <div class="step-bar-holder">
      <div class="task_details_step_bar__Container-sc-4dxcbc-0 bdybsA">
        <span
          data-ui-test="completed-task-state"
          class={`task-details-step-bar bcXpha ${status === "open" &&
            "status-active"}`}
        >
          <span
            color="#7db343"
            class="Text__StyledTypographyComponent-vkkwwf-0 dvmZPW"
          >
            Open
          </span>
        </span>
        <span
          data-ui-test="pending-task-state"
          class="task-details-step-bar ioSWlZ"
        >
          <span
            color="#bbc2dc"
            class={`Text__StyledTypographyComponent-vkkwwf-0 hrKBJX ${status ===
              "assigned" && "status-active"}`}
          >
            Assigned
          </span>
        </span>
        <span
          data-ui-test="pending-task-state"
          class="task-details-step-bar ioSWlZ"
        >
          <span
            color="#bbc2dc"
            class={`Text__StyledTypographyComponent-vkkwwf-0 hrKBJX ${status ===
              "completed" && "status-active"}`}
          >
            Completed
          </span>
        </span>
      </div>
      <div className="following-button">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default TaskDetailHeader;
