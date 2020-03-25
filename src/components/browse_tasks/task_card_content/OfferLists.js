import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Timestamp from "react-timestamp";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import { ASSIGN_TASK_URL } from "../../../routes/URLMAP";
import { getRoleId } from "../../../utils/auth";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  container: {
    width: "100%",
    marginBottom: "15px"
  },
  listWrapper: {
    display: "flex"
  },
  inline: {
    display: "inline"
  },
  timestamp: {
    color: "#545a77",
    fontSize: "16px"
  },
  reply: {
    fontSize: "16px",
    marginLeft: "10px"
  },
  link: {
    textDecoration: "none !important",
    ":&hover, :&active": {
      textDecoration: "none !important"
    }
  },
  button: {
    backgroundColor: "#7db343",
    borderRadius: "160px",
    fontSize: "14px",
    margin: "15px",
    "&:hover": {
      backgroundColor: "rgb(146, 201, 88)"
    }
  },
  paper: {
    backgroundColor: "rgb(246, 248, 253)",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "10px"
  },
  divider: {
    marginRight: "72px"
  }
}));

function OfferLists(props) {
  const classes = useStyles();
  const {
    offers,
    match: { url: currentUrl }
  } = props;
  const customerId = getRoleId("customer");

  const taskState = useSelector(state => state.task);

  const { isFetchingDetails, taskDetails } = taskState;

  const renderChip = tradieId => {
    if (isFetchingDetails || !taskDetails.customer || !taskDetails.tradie)
      return;

    const currAssignedTradie = taskDetails.tradie._id;

    if (tradieId === currAssignedTradie) {
      return (
        <Chip
          icon={<AssignmentTurnedInIcon />}
          label="Assigned tradie"
          color="secondary"
          variant="outlined"
        />
      );
    }
  };

  const renderAcceptButton = (tradieId, name, avatar, offer) => {
    if (isFetchingDetails || !taskDetails.customer) return;

    const currTaskCustomerId = taskDetails.customer._id;

    if (taskDetails.status === "open" && customerId === currTaskCustomerId) {
      return (
        <Link
          to={{
            pathname: `${currentUrl}/${customerId}${ASSIGN_TASK_URL}/${tradieId}`,
            state: { name, avatar, price: offer.price }
          }}
          className={classes.link}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AssignmentTurnedInOutlinedIcon />}
          >
            Accept
          </Button>
        </Link>
      );
    }
  };

  return (
    <List className={classes.root}>
      {offers.map(offer => {
        const { _id: tradieId, avatar, name } = offer.tradie;
        return (
          <>
            <div className={classes.container}>
              <div className={classes.listWrapper}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar src={avatar} alt="Remy Sharp" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          ${offer.price}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  {renderChip(tradieId)}
                </ListItem>
                {renderAcceptButton(tradieId, name, avatar, offer)}
              </div>
              <Paper className={classes.paper}>{offer.comment}</Paper>
              <Timestamp
                className={classes.timestamp}
                relative
                date={offer.createdAt}
              />
              {getRoleId("tradie") !== tradieId && (
                <Link className={classes.reply} to="#">
                  reply
                </Link>
              )}
            </div>
            <Divider
              className={classes.divider}
              variant="inset"
              component="li"
            />
          </>
        );
      })}
    </List>
  );
}

export default withRouter(OfferLists);
