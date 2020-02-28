import React, { Component, useContext }from "react";
import Slide from '@material-ui/core/Slide';
import TaskCardContentDetails from './TaskCardContentDetails';
import {
  DetailContext
} from "../../hooks/detailReducer";


const ContentDisplay = () => {

    const detailContext = useContext(DetailContext);

    const {

      isDetailOn,

    } = detailContext.detailState;

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

