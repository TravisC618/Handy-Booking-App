import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import { AccountProfile, AccountDetails } from "./components";

import "../../../css/account/profile.css";

const useStyles = makeStyles(() => ({
  root: {}
}));

const SettingProfile = () => {
  const classes = useStyles();

  return (
    <div className="profile vertical-scroll">
      <div className="profile__page">
        <div className="profile__page-header">
          <h4>Profile</h4>
        </div>
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountProfile />
              <AccountDetails />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
