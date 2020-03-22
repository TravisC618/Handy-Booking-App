import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Card,
  Icon,
  IconButton,
  TablePagination
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";
import { classList } from "./utils";
import { reqGetTask } from "../../../api/tasks";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Moment from "react-moment";
import Badge from "@material-ui/core/Badge";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskCardContentDetails from "./TaskCardContentDetails";
import { getRoleId } from "../../../utils/auth";
import "../../../css/account/task-table.scss";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      shouldShowConfirmationDialog: false,
      isLoading: false,
      isisEmpty: false,
      rowsPerPage: 5,
      page: 0
    };
  }

  setPage = page => {
    this.setState({ page });
  };

  setRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangePage = (event, newPage) => {
    this.setPage(newPage);
  };

  componentDidMount() {
    this.updatePageData();
    if (this.state.taskList.length === 0) {
      this.setState({ isLoading: true });
      setTimeout(
        () => this.setState({ isLoading: false, isEmpty: true }),
        5000
      );
    }
  }

  updatePageData = () => {
    const { userDetails } = this.props;
    this.setState({ isLoading: true }, () => {
      userDetails.tasks.map((tasks, index) =>
        reqGetTask(tasks).then(res => {
          this.setState(prevState => ({
            taskList: [
              ...prevState.taskList,
              {
                Id: res.data.data._id,
                title: res.data.data.title,
                budget: res.data.data.budget,
                postDate: res.data.data.postDate,
                status: res.data.data.status,
                offers: res.data.data.offers
              }
            ]
          }));
          this.setState({ isLoading: false, isEmpty: false });
        })
      );
    });
  };

  handeDeleteClick = invoice => {
    this.setState({ shouldShowConfirmationDialog: true, invoice });
  };

  handleConfirmationResponse = () => {
    //delete action
  };

  handleDialogClose = () => {
    this.setState({ shouldShowConfirmationDialog: false });
  };

  render() {
    let { rowsPerPage, page, taskList, isLoading, isEmpty } = this.state;
    const customerId = getRoleId("customer");
    const tradieId = getRoleId("tradieId");
    const userRoleId = customerId || tradieId;

    const toUpperCaseFilter = d => {
      return d.toUpperCase();
    };

    return (
      <div className="m-sm-30">
        <Card elevation={6} className="w-100 overflow-auto">
          <Table style={{ minWidth: 730, margin: 20 }}>
            <TableHead className="task-table-header">
              <TableRow>
                <TableCell className="title pl-sm-24">Task Title</TableCell>
                <TableCell className="post-date px-0">Post Date</TableCell>
                <TableCell className="budget px-0">Budget</TableCell>
                <TableCell className="offers px-0">Offers</TableCell>
                <TableCell className="task-status px-0">Status</TableCell>
                <TableCell className="do-action px-0">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <div className="loading">
                  <CircularProgress
                    style={{ position: "absolute", right: "-130%", top: "50%" }}
                  />
                </div>
              ) : isEmpty ? (
                <div className="empty">
                  <span className="empty-span">
                    Sorry, it looks like you haven’t posted any tasks yet.
                  </span>
                </div>
              ) : (
                taskList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((taskList, index) => (
                    <TableRow key={taskList.Id}>
                      <TableCell className="title px-0" align="left">
                        {taskList.title}
                      </TableCell>
                      <TableCell className="post-date px-0" align="left">
                        <Moment format="ddd, D MMM" filter={toUpperCaseFilter}>
                          {taskList.postDate}
                        </Moment>
                      </TableCell>
                      <TableCell className="budget px-0">
                        ${taskList.budget}
                      </TableCell>
                      <TableCell className="offers px-0" align="left">
                        <Badge
                          badgeContent={taskList.offers.length}
                          color="primary"
                        >
                          <PostAddIcon />
                        </Badge>
                      </TableCell>
                      <TableCell className="task-status-chip pl-0 capitalize">
                        <Chip
                          color={classList({
                            primary: taskList.status === "open",
                            secondary: taskList.status === "assigned",
                            default: taskList.status === "completed"
                          })}
                          size="small"
                          label={taskList.status}
                        ></Chip>
                      </TableCell>
                      <TableCell className="do-action pl-0">
                        <IconButton
                          color="primary"
                          className="mr-8"
                          // onClick={() => this.handeViewClick()}
                        >
                          <Link
                            to={`/account/${userRoleId}/view-tasks/${taskList.Id}`}
                          >
                            <ArrowForwardIosIcon fontSize="small" />
                          </Link>
                        </IconButton>
                        <IconButton
                          onClick={() => this.handeDeleteClick(taskList)}
                        >
                          <DeleteIcon fontSize="small" color="secondary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
          <TablePagination
            className="px-16"
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={taskList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.setRowsPerPage}
          />
        </Card>
        <ConfirmationDialog
          open={this.state.shouldShowConfirmationDialog}
          onConfirmDialogClose={this.handleDialogClose}
          onYesClick={this.handleConfirmationResponse}
          text="Are you sure to delete?"
        />
        <Route
          path={`/account/:userId/view-tasks/:taskId`}
          component={TaskCardContentDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.account.userDetails
});

export default connect(mapStateToProps)(TaskList);
