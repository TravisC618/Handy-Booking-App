import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 20,
    boxShadow: "none",
    backgroundColor: "inherit"
  },
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: 20
  },
  uploadButton: {
    marginRight: 20
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: "Shen Zhi",
    city: "Newcastle West",
    country: "Australia",
    timezone: "GMT+11",
    avatar: "/images/avatars/avatar_11.png"
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              { user.name }
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format("hh:mm A")} ({user.timezone})
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={user.avatar} />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress value={70} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          className={classes.uploadButton}
          color="primary"
          variant="contained"
        >
          Upload picture
        </Button>
        <Button variant="contained">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
