import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  radio: {
    "&$checked": {
      color: "#4B8DF8"
    },
    checked: {}
  },
  amount: {
    marginLeft: theme.spacing(3),
    width: 150
  },
  hour: {
    width: 100
  },
  budgetScreen: {
    display: "flex"
  },
  estimateScreen: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: theme.spacing(2),
    borderRadius: "30px",
    marginTop: theme.spacing(3)
  },
  box: {
    display: "flex"
  },
  icon: {
    alignSelf: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  errMsg: {
    color: "#f44336",
    marginTop: theme.spacing(2)
  }
}));

export default function Budget(props) {
  const classes = useStyles();
  const { handleChange, values } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What is your budget?
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Please enter the price you're comfortable to pay to get your task done.
        Taskers will use this as a guide for how much to offer.
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          row
          aria-label="budget"
          name="radio"
          value={values.radio}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Total"
            control={<Radio color="primary" />}
            label="Total"
            labelPlacement="end"
            disableRipple
          />
          <FormControlLabel
            value="Hourly rate"
            control={<Radio color="primary" />}
            label="Hourly rate"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
      <div className={classes.budgetScreen}>
        <FormControl variant="outlined" className={classes.amount}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="tel"
            name="amount"
            value={values.amount}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            endAdornment={
              <Box display={values.radio === "Hourly rate" ? "block" : "none"}>
                <InputAdornment position="end">/hr</InputAdornment>
              </Box>
            }
            labelWidth={60}
          />
        </FormControl>
        <Box
          className={values.radio === "Hourly rate" ? classes.box : null}
          display={values.radio === "Hourly rate" ? "block" : "none"}
        >
          <CloseIcon className={classes.icon} />
          <OutlinedInput
            id="outlined-adornment-hour"
            className={classes.hour}
            type="tel"
            name="hour"
            value={values.hour}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">hrs</InputAdornment>}
            aria-describedby="outlined-hour-helper-text"
            inputProps={{
              "aria-label": "hour"
            }}
            labelWidth={0}
          />
        </Box>
      </div>
      {values.err.name === "budget" ? (
        <Grid className={classes.errMsg} item>
          {values.err.msg}
        </Grid>
      ) : null}
      <Grid className={classes.estimateScreen} container alignItems="center">
        <Grid direction="row" justify="space-around" container xs>
          <Typography gutterBottom variant="h8">
            ESTIMATED BUDGET
          </Typography>
          <Typography gutterBottom variant="h8">
            ${" "}
            {values.radio === "Total"
              ? values.amount
              : values.amount * values.hour}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
