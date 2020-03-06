import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import MaterialLink from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    "&:hover": {
      color: "#ff3366",
      textDecoration: "none"
    }
  },
  currentLink: {
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
}));

export default function TaskBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <MaterialLink color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </MaterialLink>
      <Typography color="textPrimary" className={classes.currentLink}>
        <AssignmentIcon className={classes.icon} />
        Post Task
      </Typography>
    </Breadcrumbs>
  );
}
