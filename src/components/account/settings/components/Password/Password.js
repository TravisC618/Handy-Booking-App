import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Divider,
  CardHeader
} from "@material-ui/core";



const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    boxShadow: 'none',
    backgroundColor: 'inherit'
  },

  textField: {
    marginLeft: 100,
    marginRight: 1,
    width: 200
  },

}));

const Password = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    confirm: ""
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // const Password = props => {
  return (
        <Card {...rest} className={clsx(classes.root, className)}>
          <form>
            <CardHeader
              subheader="Update the password"
            />
            <Divider />
            <CardContent>
              <TextField
                className={classes.textField}
                size="small"
                fullWidth
                label="New Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="Confirm Password"
                name="confirm"
                onChange={handleChange}
                style={{ marginTop: "1rem" }}
                type="password"
                value={values.confirm}
                variant="outlined"
                size="small"
              />
            </CardContent>
            <Divider />
            <CardActions>
              <Button className={classes.button} color="primary" variant="outlined">
                Update Password
              </Button>
            </CardActions>
          </form>
        </Card>

  );
};

Password.propTypes = {
  className: PropTypes.string
};

export default Password;
