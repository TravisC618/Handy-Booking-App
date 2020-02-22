import React from "react";
import { connect } from "react-redux";
import TaskNav from "./components/browse_tasks/TaskNav";
import VirtualizedList from "./utils/Table-origin";
import TaskMap from "./components/browse_tasks/TaskMap";
import { handleGetAllTasks as handleGetAllTasksAction } from "./redux/actions/taskAction";
import "./css/browse_tasks/task-list.css";

class BrowseTasks extends React.Component {
  //   getAllTasks = () => this.props.handleGetAllTasks();

  //   async componentDidMount() {
  //     const tasks = await this.props.handleGetAllTasks();
  //     console.log(tasks);
  //   }

  render() {
    return (
      <div className="browseContent">
        <div class="row">
          <div class="col-12">
            <div class="col">
              <TaskNav />
            </div>
            <div class="row">
              <div class="col-4">
                <div className="infinite-scroll-list">
                  <VirtualizedList />
                </div>
              </div>
              <div class="col-8">
                <TaskMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => null;

// const mapDispatchToProps = dispatch => ({
//   handleGetAllTasks: () => dispatch(handleGetAllTasksAction())
// });

export default BrowseTasks;
