import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import GoogleMapsInput from "./MapInput";
import "../../css/create_profile/basic-information.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  font: {
    fontSize: 25,
    textTransform: "initial"
  }
}));

export default function BasicInformation(props) {
  const { handleChange, values } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.font}>
        Tell us about yourself to set up your profile
      </Typography>
      <div className="basic-information-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={event => handleChange(event)}
              required
              name="firstname"
              placeholder="FirstName"
              value={values.firstname}
              label={
                values.err.name === "firstname"
                  ? "Error"
                  : "What is your first name?"
              }
              error={values.err.name === "firstname" ? true : false}
              helperText={
                values.err.name === "firstname" ? values.err.msg : null
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={event => handleChange(event)}
              required
              name="lastname"
              placeholder="LastName"
              value={values.lastname}
              label={
                values.err.name === "lastname"
                  ? "Error"
                  : "What is your last name?"
              }
              error={values.err.name === "lastname" ? true : false}
              helperText={
                values.err.name === "lastname" ? values.err.msg : null
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={event => handleChange(event)}
              required
              name="email"
              placeholder="Email Address"
              value={values.email}
              label={
                values.err.name === "email" ? "Error" : "What is your email?"
              }
              error={values.err.name === "email" ? true : false}
              helperText={values.err.name === "email" ? values.err.msg : null}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <GoogleMapsInput values={values} handleChange={handleChange} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
