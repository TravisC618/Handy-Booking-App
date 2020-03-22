import React from "react";
import TaskNav from "../components/browse_tasks/task_nav/TaskNav";
import { BrowseTasksContent } from "../components/browse_tasks/BrowseTasks_Content";
import "../css/browse_tasks/task-list.scss";

const BrowseTasks = () => {
  return (
    <div className="browseContent">
      <div class="row">
        <div class="col-12">
          <div class="task-nav">
            <TaskNav />
          </div>
          <BrowseTasksContent />
        </div>
      </div>
    </div>
  );
};

export default BrowseTasks;
