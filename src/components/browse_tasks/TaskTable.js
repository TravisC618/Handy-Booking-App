import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Virtuoso } from "react-virtuoso";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import TaskCard from "./TaskCards";
import LoadingSpinner from "../../UI/LoadingSpinner";
import LinearIndeterminate from "../../UI/LinearIndeterminate";
import { reqGetAllTasks } from "../../api/tasks";
import {
  UPDATE_CURRENT_TASKS,
  UPDATE_SCROLLBAR_LOADING,
  UPDATE_TOTAL,
  INCREMENT_PAGE,
  UPDATE_ITEM_STATE,
  ERROR_MSG,
  RESET_ITEM
} from "../../redux/actions/taskAction";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const TaskTable = () => {
  const items = useRef([]);
  const taskState = useSelector(state => state.task);
  const dispatch = useDispatch();
  const {
    total,
    page,
    pageSize,
    searchKey,
    priceRange,
    sortOrder,
    hasMoreItem,
    errMsg,
    isScrollBarLoading
  } = taskState;
  const getTasksConfigs = { searchKey, priceRange, sortOrder };

  const classes = useStyles();

  const GenerateItem = index => {
    return <TaskCard tasks={items.current[index]} />;
  };

  useEffect(() => {
    dispatch({ type: RESET_ITEM });
    return () => {
      dispatch({ type: RESET_ITEM });
    };
  }, []);

  useEffect(() => {
    // reset task items, due to search, priceRange, sort...
    items.current = [];
    // dispatch({ type: UPDATE_ITEM_STATE, hasMoreItem: true });
    loadMore(getTasksConfigs);
  }, [searchKey, priceRange, sortOrder]);

  const loadMore = async getTasksConfigs => {
    if (isScrollBarLoading) return;

    const { searchKey, priceRange, sortOrder: sort } = getTasksConfigs;

    const minPrice = priceRange[0];
    const maxPrice = priceRange[1];

    let response;
    try {
      response = await reqGetAllTasks(
        page,
        pageSize,
        minPrice,
        maxPrice,
        sort,
        searchKey
      );
    } catch (err) {
      dispatch({ type: ERROR_MSG, errMsg: err.message });
      return;
    }

    const { tasks, pagination } = response.data.data;
    const totalPages = pagination.pages;

    if (tasks.length === 0) {
      dispatch({ type: ERROR_MSG, errMsg: "Sorry, no result was found" });
      return;
    }

    // remove footer when items less than 2
    // or. current page is the lastPage => no more item to render
    if (tasks.length < pageSize || page >= totalPages) {
      dispatch({ type: UPDATE_ITEM_STATE, hasMoreItem: false });
    }

    // TODO 调整 UPDATE_SCROLLBAR_LOADING 的顺序， 尝试callback
    dispatch({ type: UPDATE_SCROLLBAR_LOADING });
    for (let index = 0; index < tasks.length; index++) {
      items.current = [...items.current, tasks[index]];
    }
    dispatch({ type: UPDATE_CURRENT_TASKS, newTasks: tasks });
    dispatch({ type: UPDATE_SCROLLBAR_LOADING });

    dispatch({ type: UPDATE_TOTAL, total: items.current.length });
    dispatch({ type: INCREMENT_PAGE });
  };

  const handleEndReached = getTasksConfigs => {
    if (!hasMoreItem) return;
    loadMore(getTasksConfigs);
  };

  const renderFooter = () => {
    if (!!hasMoreItem)
      return (
        <div style={{ textAlign: "center" }}>
          <LoadingSpinner />
        </div>
      );
  };

  if (errMsg)
    return (
      <div className={classes.root}>
        <Alert severity="error">{errMsg}!</Alert>
      </div>
    );

  if (items.current.length === 0) {
    return (
      <div style={{ width: "350px", height: "calc(100vh - 137px)" }}>
        <LinearIndeterminate />
      </div>
    );
  }

  return (
    <Virtuoso
      style={{ width: "350px", height: "calc(100vh - 137px)" }}
      overscan={pageSize}
      totalCount={total}
      item={items.current.length === 0 ? <LinearIndeterminate /> : GenerateItem}
      endReached={() => handleEndReached(getTasksConfigs)}
      footer={renderFooter}
    />
  );
};

export default TaskTable;
