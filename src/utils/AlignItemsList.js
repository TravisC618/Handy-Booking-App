import React from 'react';
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
                UserName
              </Typography>
              <Typography className={classes.inline} style={{ float:'right' }}>
              3 hours ago
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
                West End QLD, Australia
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
                Friday, 21st Feb 2020
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
