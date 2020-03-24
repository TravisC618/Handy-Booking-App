import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const PaymentSwitch = withStyles({
  switchBase: {
    color: orange[300],
    "&$checked": {
      color: orange[500]
    },
    "&$checked + $track": {
      backgroundColor: orange[500]
    }
  },
  checked: {},
  track: {}
})(Switch);

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
  paper: {
    boxShadow: "none"
  }
});

const PaymentSelect = props => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const { values, serviceFee } = props;
  const paypalFee = (values.price * 0.05).toFixed(2);
  const finalReceive = (values.price - serviceFee - paypalFee).toFixed(2);

  const handleChange = event => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
  };

  return (
    <div className="payment-selection">
      <FormControlLabel
        control={<PaymentSwitch checked={checked} onChange={handleChange} />}
        label="Paypal"
      />
      <div>
        <Fade in={checked}>
          <Paper className={classes.paper}>
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
                  Paypal fee
                </Typography>
              </Grid>
              <Typography className={classes.fee} variant="body1">
                {paypalFee}
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="body1">
                With Paypal, you'll receive
              </Typography>
              <Typography variant="body1">${finalReceive}</Typography>
            </Grid>
          </Paper>
        </Fade>
      </div>
    </div>
  );
};

export default PaymentSelect;
