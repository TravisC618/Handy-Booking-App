import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import TaskCardContentMain from "./task_card_content/TaskCardContentMain";

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

const TaskCards = props => {
  const classes = useStyles();
  const { tasks } = props;

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.bgcolor} />
        <CardActionArea>
          <CardContent>
            <TaskCardContentMain tasks={tasks} />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default TaskCards;
