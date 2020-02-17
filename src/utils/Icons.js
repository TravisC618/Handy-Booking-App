import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,  
    margin: '5px 5px 0 0',
  },
}));

function Calendar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TodayOutlinedIcon style={{ fontSize: 'medium' }} />
        </div>
    );
  }



function Location() {
  const classes = useStyles();
  return (
        <div className={classes.root}>
            <LocationOnOutlinedIcon style={{ fontSize: 'medium' }} />
        </div>
  );
}

export {
    Calendar,
    Location,
  }
