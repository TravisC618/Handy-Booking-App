import React from "react";
import TaskNav from "../components/browse_tasks/task_nav/TaskNav";
import BrowseTasksContent from "../components/browse_tasks/BrowseTasksContent";
import "../css/browse_tasks/task-list.scss";

const BrowseTasks = () => {
  return (
    <div className="browseContent">
      <div className="row">
        <div className="col-12">
          <div className="task-nav">
            <TaskNav />
          </div>
          <BrowseTasksContent />
        </div>
      </div>
    </div>
  );
};

export default BrowseTasks;
