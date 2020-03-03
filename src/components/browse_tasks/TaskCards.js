import React, { Component, useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import TaskCardContent from "./TaskCardContent";
import {
  TaskContext,
} from "../../hooks/taskReducer";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    borderRadius: 10,
    margin: "10px 10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderLeft: "4px solid #3f51b5"
  },
  bgcolor: {
    background: "#f2f7f9"
  }
}));

const ImgMediaCard = props => {
  const classes = useStyles();
  const { tasks } = props;

  const taskContext = useContext(TaskContext);
  // const dispatch = taskContext.taskDispatch;


  // const handleClick = () => {
  //   dispatch({ type: HIDE_Map_State  })
  // };

  return (
    <div>
    <Card 
    className={classes.root} 
    // onClick={() => {
    //   handleClick();
    // }}
    >
      <div className={classes.bgcolor} />
      <CardActionArea>
        <CardContent>
          <TaskCardContent tasks={tasks} />
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};




export default ImgMediaCard;
