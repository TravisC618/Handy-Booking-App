import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import { display } from "@material-ui/system";

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
  box: {
    display: "flex"
  },
  icon: {
    alignSelf: "center",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function Budget() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    radio: "Total",
    amount: "",
    hour: ""
  });

  const handleChange = prop => event => {
    if (prop === "amount" || prop === "hour") {
      // 限制只能输入positive number
    }
    setValues({ ...values, [prop]: event.target.value });
  };

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
          name="budget"
          value={values.radio}
          onChange={handleChange("radio")}
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
            value={values.amount}
            onChange={handleChange("amount")}
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
            value={values.hour}
            onChange={handleChange("hour")}
            endAdornment={<InputAdornment position="end">hrs</InputAdornment>}
            aria-describedby="outlined-hour-helper-text"
            inputProps={{
              "aria-label": "hour"
            }}
            labelWidth={0}
          />
        </Box>
      </div>
    </React.Fragment>
  );
}
