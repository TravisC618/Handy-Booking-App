import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiDialogContent from "@material-ui/core/DialogContent";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import PaymentSelect from "./PaymentSelect";
import PriceInput from "./PriceInput";

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    overflowY: "hidden",
    minWidth: "400px",
    textAlign: "center"
  }
}))(MuiDialogContent);

const useStyles = makeStyles({
  subtitle: {
    textAlign: "center"
  },
  grid: {
    width: "auto"
  },
  fee: {
    fontSize: "15px",
    color: "#545a77"
  },
  tooltip: {
    marginLeft: "5px"
  }
});

const INFO =
  "This fee helps us cover the costs of keeping the platform running. Includes GST.";

const AskPrice = props => {
  const { values, setValues, err } = props;
  const classes = useStyles();

  const serviceFee = (values.price * 0.1).toFixed(2);
  const finalReceive = (values.price - serviceFee).toFixed(2);

  return (
    <DialogContent>
      <Typography className={classes.subtitle} variant="subtitle1">
        Your offer
      </Typography>
      <PriceInput values={values} setValues={setValues} err={err} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          className={classes.grid}
          container
          direction="row"
          alignItems="center"
        >
          <Typography className={classes.fee} variant="body1">
            Byedust service fee
          </Typography>
          <Tooltip
            title={INFO}
            className={classes.tooltip}
            aria-label="add"
            fontSize="small"
            color="action"
          >
            <InfoIcon />
          </Tooltip>
        </Grid>
        <Typography className={classes.fee} variant="body1">
          ${serviceFee}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="body1">You'll receive</Typography>
        <Typography variant="body1">${finalReceive}</Typography>
      </Grid>

      <PaymentSelect values={values} serviceFee={serviceFee} />
    </DialogContent>
  );
};

export default AskPrice;
