import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: "180px"
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  },
  err: {
    display: "block",
    color: "#f44336",
    fontSize: "15px"
  }
}));

export default function PriceInput(props) {
  const classes = useStyles();
  const { values, setValues, err } = props;

  const handleChange = event => {
    const price = event.target.value;
    setValues({ ...values, price });
  };

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={values.price}
        onChange={handleChange}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        labelWidth={72}
        error={err.type === "price"}
      />
      <span className={classes.err}>{err.type === "price" && err.msg}</span>
    </FormControl>
  );
}
