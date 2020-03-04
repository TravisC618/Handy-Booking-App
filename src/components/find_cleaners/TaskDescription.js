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
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextField
            onChange={event => handleChange(event)}
            required // => error: validation
            name="title"
            value={values.title}
            placeholder="This'll be the title of your task - e.g. Help move my sofa"
            label={
              values.err.name === "title" ? "Error" : "What do you need done?"
            }
            error={values.err.name === "title" ? true : false}
            helperText={values.err.name === "title" ? values.err.msg : null}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => handleChange(event)}
            required
            name="details"
            value={values.details}
            label={
              values.err.name === "details" ? "Error" : "What are the details?"
            }
            error={values.err.name === "details" ? true : false}
            helperText={values.err.name === "details" ? values.err.msg : null}
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
