import React, { useRef, useEffect, useContext } from "react";
import { Virtuoso } from "react-virtuoso";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import ImgMediaCard from "../components/browse_tasks/TaskCards";
import LoadingSpinner from "../img/icons/LoadingSpinner.svg";
import { reqGetAllTasks } from "../api/tasks";
import {
  UPDATE_TOTAL,
  TaskContext,
  INCREMENT_PAGE,
  UPDATE_ITEM_STATE,
  ERROR_MSG
} from "../hooks/taskReducer";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const Table = () => {
  const items = useRef([]);
  const loading = useRef(false);

  const taskContext = useContext(TaskContext);
  const {
    total,
    page,
    pageSize,
    priceRange,
    hasMoreItem,
    errMsg
  } = taskContext.taskState;
  const dispatch = taskContext.taskDispatch;

  const classes = useStyles();

  const GenerateItem = index => {
    return loading.current ? (
      <div />
    ) : (
      <ImgMediaCard tasks={items.current[index]} />
    );
  };

  useEffect(() => {
    // reset task items, due to search, priceRange, sort...
    items.current = [];
    dispatch({ type: UPDATE_ITEM_STATE }); // => true
    loadMore(priceRange);
  }, [priceRange]);

  const loadMore = async priceRange => {
    if (loading.current) return;

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
    }
    const { tasks, pagination } = response.data.data;
    const totalPages = pagination.pages;

    // remove footer when items less than 2
    // or. current page is the lastPage => no more item to render
    if (tasks.length < pageSize || page >= totalPages) {
      dispatch({ type: UPDATE_ITEM_STATE }); // => false
    }

    loading.current = true;

    for (let index = 0; index < tasks.length; index++) {
      items.current = [...items.current, tasks[index]];
    }
    loading.current = false;

    dispatch({ type: UPDATE_TOTAL, total: items.current.length });
    dispatch({ type: INCREMENT_PAGE });
  };

  if (errMsg) {
    return (
      <div className={classes.root}>
        <Alert severity="error">{errMsg}!</Alert>
      </div>
    );
  }

  return (
    <Virtuoso
      style={{ width: "350px", height: "780px" }}
      overscan={pageSize}
      totalCount={total}
      item={GenerateItem}
      endReached={hasMoreItem === true ? () => loadMore(priceRange) : null}
      footer={
        hasMoreItem === true
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
