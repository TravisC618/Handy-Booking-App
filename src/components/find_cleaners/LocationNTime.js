import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GoogleMapsInput from "../../UI/GoogleMapsInput";
import { makeStyles } from "@material-ui/core";
import DatePicker from "../../UI/DatePicker";

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(6)
  }
}));
export default function LocationNTime(props) {
  const classes = useStyles();

  const { handleChange, values } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Where do you need it done?
      </Typography>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12} md={6}>
          <GoogleMapsInput values={values} handleChange={handleChange} />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        When do you need it done?
      </Typography>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12} md={6}>
          <DatePicker values={values} handleChange={handleChange} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
