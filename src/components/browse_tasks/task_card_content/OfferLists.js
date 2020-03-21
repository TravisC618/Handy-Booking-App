import React from "react";
import { Link } from "react-router-dom";
import Timestamp from "react-timestamp";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { getRoleId } from "../../../utils/auth";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  container: {
    marginBottom: "15px"
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
  }
}));

export default function OfferLists(props) {
  const classes = useStyles();
  const { offers } = props;

  return (
    <List className={classes.root}>
      {offers.map(offer => {
        const { _id: tradieId, avatar, name } = offer.tradie;
        return (
          <>
            <div className={classes.container}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={avatar} />
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
                      {` — ${offer.comment}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
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
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
