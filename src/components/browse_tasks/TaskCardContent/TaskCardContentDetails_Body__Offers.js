import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "../../../css/browse_tasks/TaskCardContentDetails_Body__Offers.css";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexShrink: 0,
    marginTop: "20px !important"
  }
}));

export default function Offers() {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading} variant="h6" color="primary">
        OFFERS
      </Typography>
      <div class="offers">
        <p class="center margin-20-top">
          <img
            src="https://www.airtasker.com/images/waiting-for-offers.png"
            alt="offers"
          />
        </p>
        <button type="button" class="button-sml button-cta offer-button center">
          Make an offer
        </button>
      </div>
    </div>
  );
}
