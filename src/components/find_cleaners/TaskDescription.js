import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function TaskDescription(props) {
  const { handleChange, values } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell us what you need done
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <TextField
            onChange={event => handleChange(event)}
            required // => error: validation
            name="title"
            value={values.title}
            label="What do you need done?"
            placeholder="This'll be the title of your task - e.g. Help move my sofa"
            variant="outlined"
            // helperText="Incorrect entry." [error: validation]
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => handleChange(event)}
            required
            name="details"
            value={values.details}
            label="What are the details?"
            placeholder="Be as specific as you can about what needs doing"
            fullWidth
            rows="4"
            variant="outlined"
            multiline
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
