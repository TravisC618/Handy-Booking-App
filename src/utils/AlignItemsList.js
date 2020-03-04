import React, {useContext} from 'react';
import {DetailContext} from '../hooks/detailReducer';
import Moment from "react-moment";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,    
  },
  inline: {
    display: 'inline',
    fontSize: '1px',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  const toUpperCaseFilter = d => {
    return d.toUpperCase();
  };
  const detailContext = useContext(DetailContext);
  const { taskDetails } = detailContext.detailState;
  const location = taskDetails.location;
  const postDate = taskDetails.postDate;
  const dueDate = taskDetails.dueDate;
  const name = taskDetails.name;


  return (

    <List className={classes.root}>
      <ListItem alignItems="flex-start" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ListItemAvatar style={{ marginRight: 5 }}>
            <AccountCircleRoundedIcon color="primary" style={{ fontSize: 45 }} />
        </ListItemAvatar>
        <ListItemText
          primary="POSTED BY"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
                fontSize= "1px"
              >
                {name}
              </Typography>
              <Typography className={classes.inline} style={{ float:'right' }}>
              <Moment format="ddd, D MMM" filter={toUpperCaseFilter}>
                {postDate}
              </Moment>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ListItemAvatar style={{ marginRight: 5 }}>
          <RoomRoundedIcon color="primary" style={{ fontSize: 45 }} />
        </ListItemAvatar>
        <ListItemText
          primary="LOCATION"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {location}
              </Typography>
              <Typography className={classes.inline} style={{ float:'right' }}>
                <Link href="#" onClick={preventDefault}>
                     View map
                </Link>       
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ListItemAvatar style={{ marginRight: 5 }}>
          <TodayRoundedIcon color="primary" style={{ fontSize: 45 }} />
        </ListItemAvatar>
        <ListItemText
          primary="DUE DATE"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <Moment format="ddd, D MMM" filter={toUpperCaseFilter}>
                {dueDate}
              </Moment>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
