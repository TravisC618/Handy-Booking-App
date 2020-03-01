import React, { Component, useContext }from "react";
import Slide from '@material-ui/core/Slide';
import TaskCardContentDetails from './TaskCardContentDetails';
import {
  TaskContext
} from "../../hooks/taskReducer";


const ContentDisplay = () => {

    const taskContext = useContext(TaskContext);

    const {

      isDetailOn,

    } = taskContext.taskState;

    return(

      <Slide 
      in={isDetailOn}
      direction="left"
      mountOnEnter unmountOnExit
      style={{ transformOrigin: '0 0 0' }}
      {...( isDetailOn? { timeout: 1000 } : {})}
    >
      <div>
        <TaskCardContentDetails />
      </div>
    </Slide>

    )
  }

export default ContentDisplay;

