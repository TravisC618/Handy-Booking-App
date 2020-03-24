import React from "react";
import Grid from "@material-ui/core/Grid";
import TaskDetailHeader from "./TaskCardContentDetails_Header__NavBar";
import HeaderContent from "./TaskCardContentDetails_Header__Content";
import SidePanel from "./TaskCardContentDetails_Header__SidePanel";
import TaskCardContentDetailsDropDown from "./TaskCardContentDetails_Header__DropDown";
import ShareContainer from "./TaskCardContentDetails_Header__Share";
import TaskReport from "./TaskCardContentDetails_Header__Report";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden"
  }
}));

export default function TaskCardContentDetailsHeader() {
  const classes = useStyles();

  return (
    <div className="TaskDetails-header">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={8} zeroMinWidth>
          <TaskDetailHeader />
          <HeaderContent />
        </Grid>
        <Grid item xs={4} zeroMinWidth>
          <SidePanel />
          {/* SidePanel - model */}
          <TaskCardContentDetailsDropDown />
          <ShareContainer />
          <TaskReport />
        </Grid>
      </Grid>
    </div>
  );
}
