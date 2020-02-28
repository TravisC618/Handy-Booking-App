import React, { useReducer } from "react";
import TaskNav from "./components/browse_tasks/TaskNav";
import { BrowseTasksContent } from "./components/browse_tasks/BrowseTasks_Content";
import "./css/browse_tasks/task-list.css";
import { TaskContext, taskReducer, initialState } from "./hooks/taskReducer";


const BrowseTasks = () => {
  const [task, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ taskState: task, taskDispatch: dispatch }}>
      <div className="browseContent">
        <div class="row">
          <div class="col-12">
            <div class="col">
              <TaskNav />
            </div>
            <BrowseTasksContent />
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
};

export default BrowseTasks;
