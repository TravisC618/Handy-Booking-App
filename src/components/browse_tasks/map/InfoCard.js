import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { TASK_URL } from "../../../routes/URLMAP";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  budget: {
    color: "#ff3366"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

export default function InfoCard(props) {
  const classes = useStyles();
  const { taskId, title, details, budget, name } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        title={name}
        subheader={`EARN $${budget}`}
      />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`${TASK_URL}/${taskId}`}>
          <Button size="small" color="primary">
            View task
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
