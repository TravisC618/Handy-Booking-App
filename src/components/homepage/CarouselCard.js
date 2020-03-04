import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Location, Calendar } from "../../utils/Icons";


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
  return (
    <Card className={classes.root}>
      <div className={classes.bgcolor} />
      <CardActionArea>
        <CardContent>
            <a href="#" class="new-task-list-item new-task-list-item--open">
            <div class="new-task-list-item__header">
            <span class="new-task-list-item__title">123</span>
            <div class="new-task-list-item__price">
                <span data-ui-test="price">$100</span>
            </div>
            </div>
            <div class="new-task-list-item__body">
            <div class="avatar-img new-task-list-item__avatar">
                <img
                src="https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/2635472/image-80689ff6486e097bcb8569ba6fae617d.jpg /"
                alt=""
                width="32"
                height="32"
                />
            </div>
            <div class="new-task-list-item__location">
                <Location />
                <div class="new-task-list-item__detail">123</div>
            </div>
            <div class="new-task-list-item__date">
                <Calendar />
                <div class="new-task-list-item__detail">
                    123
                </div>
            </div>
            </div>
            <div class="new-task-list-item__footer">
            <div class="row">
                <span class="new-task-list-item__status col-6">Open</span>
                <span class="new-task-list-item__bids col-6">1 offer</span>
            </div>
            </div>
        </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;
