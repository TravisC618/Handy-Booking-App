import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Virtuoso } from "react-virtuoso";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import TaskCard from "../components/browse_tasks/TaskCards";
import LoadingSpinner from "../img/icons/LoadingSpinner.svg";
import { reqGetAllTasks } from "../api/tasks";
import {
  UPDATE_CURRENT_TASKS,
  UPDATE_SCROLLBAR_LOADING,
  UPDATE_TOTAL,
  INCREMENT_PAGE,
  UPDATE_ITEM_STATE,
  ERROR_MSG
} from "../redux/actions/taskAction";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const Table = () => {
  // TODO 用currTasks取代items
  const items = useRef([]);
  // const loading = useRef(false);
  const taskState = useSelector(state => state.task);
  const dispatch = useDispatch();
  const {
    currTasks,
    total,
    page,
    pageSize,
    priceRange,
    hasMoreItem,
    errMsg,
    isScrollBarLoading
  } = taskState;

  const classes = useStyles();

  const GenerateItem = index => {
    return isScrollBarLoading ? (
      <div />
    ) : (
      <TaskCard tasks={items.current[index]} />
    );
  };

  useEffect(() => {
    // reset task items, due to search, priceRange, sort...
    items.current = [];
    dispatch({ type: UPDATE_ITEM_STATE }); // => true
    loadMore(priceRange);
  }, [priceRange]);

  const loadMore = async priceRange => {
    if (isScrollBarLoading) return;

    let response;
    try {
      response = await reqGetAllTasks(
        page,
        pageSize,
        priceRange[0], // minPrice
        priceRange[1] // maxPrice
      );
    } catch (err) {
      dispatch({ type: ERROR_MSG, errMsg: err.message });
      return;
    }

    const { tasks, pagination } = response.data.data;
    const totalPages = pagination.pages;

    // remove footer when items less than 2
    // or. current page is the lastPage => no more item to render
    if (tasks.length < pageSize || page >= totalPages) {
      dispatch({ type: UPDATE_ITEM_STATE }); // => false
    }

    // TODO 调整 UPDATE_SCROLLBAR_LOADING 的顺序， 尝试callback
    dispatch({ type: UPDATE_SCROLLBAR_LOADING });
    for (let index = 0; index < tasks.length; index++) {
      items.current = [...items.current, tasks[index]];
    }
    dispatch({ type: UPDATE_SCROLLBAR_LOADING });
    dispatch({ type: UPDATE_CURRENT_TASKS, newTasks: items.current });

    dispatch({ type: UPDATE_TOTAL, total: items.current.length });
    dispatch({ type: INCREMENT_PAGE });
  };

  if (errMsg)
    return (
      <div className={classes.root}>
        <Alert severity="error">{errMsg}!</Alert>
      </div>
    );

  return (
    <Virtuoso
      style={{ width: "350px", height: "calc(100vh - 134px)" }}
      overscan={pageSize}
      totalCount={total}
      item={GenerateItem}
      endReached={!!hasMoreItem ? () => loadMore(priceRange) : null}
      footer={
        !!hasMoreItem
          ? () => {
              return (
                <div style={{ textAlign: "center" }}>
                  <img src={LoadingSpinner} alt="LoadingSpinner" />
                </div>
              );
            }
          : null
      }
    />
  );
};

export default Table;
