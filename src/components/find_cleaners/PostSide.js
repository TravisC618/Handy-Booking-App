import React from "react";
import ReactPlayer from "react-player";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Checkout from "../../components/find_cleaners/Checkout";
import cleanerVideo from "../../assets/videos/cleaner.mp4";
import "../../css/find_cleaners/postside.scss";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function PostSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={7} className={classes.image}>
        <ReactPlayer
          url={cleanerVideo}
          className="video-player"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid item sm={12} md={5} component={Paper} elevation={6} square>
        <Checkout />
      </Grid>
    </Grid>
  );
}
