import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Notifications, Password } from './components';

import "../../../css/account/password.css";

const useStyles = makeStyles(() => ({
  root: {
    padding: 4
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (

    <div className="password vertical-scroll">
    <div className="password__page">
      <div className="password__page-header">
        <h4>Settings</h4>
      </div>
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={7}
          xs={12}
        >
          <Notifications />
        {/* </Grid>
        <Grid
          item
          md={5}
          xs={12}
        > */}
          <Password />
        </Grid>
      </Grid>
    </div>
    </div>
    </div>
  );
};

export default Settings;
