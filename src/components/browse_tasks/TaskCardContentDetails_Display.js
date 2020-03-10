import React from "react";
import { useSelector } from "react-redux";
import Slide from "@material-ui/core/Slide";
import TaskCardContentDetails from "./TaskCardContentDetails";

const ContentDisplay = () => {
  const isDetailOn = useSelector(state => state.task.isDetailOn);

  return (
    <Slide
      in={isDetailOn}
      direction="left"
      mountOnEnter
      unmountOnExit
      style={{ transformOrigin: "0 0 0" }}
      {...(isDetailOn ? { timeout: 1000 } : {})}
    >
      <div>
        <TaskCardContentDetails />
      </div>
    </Slide>
  );
};

export default ContentDisplay;
