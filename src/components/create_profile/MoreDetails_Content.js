import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const genders = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];

export default function DetailContent(props) {
  const { handleChange, values } = props;
  const [gender, setGender] = React.useState("");

  const handleChangeGender = event => {
    setGender(event.target.value);
  };

  return (
    <Grid item xs={6} component="span">

      {/* <div className="basic-information-container">
        <div className="profile-item-name">
          <h2>Name</h2>
          <TextField
            onChange={event => handleChange(event)}
            required
            name="username"
            value={values.username}
            label={
              values.err.name === "username" ? "Error" : "What is your name?"
            }
            error={values.err.name === "username" ? true : false}
            helperText={values.err.name === "username" ? values.err.msg : null}
            variant="outlined"
          />
        </div>
      </div> */}

      {/* <div className="profile-item">
        <Typography variant="h7">Gender</Typography>
      </div>

      <TextField
        select
        onChange={handleChangeGender}
        SelectProps={{
          native: true
        }}
        variant="outlined"
      >
        {genders.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField> */}
    </Grid>
  );
}
