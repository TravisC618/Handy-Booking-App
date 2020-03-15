import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from '@material-ui/core/RadioGroup';
import "../../css/create_profile/role-selected.scss";

const useStyles = makeStyles(theme => ({
  font: {
    fontSize: 25,
    textTransform: "initial"
  }
}));

export default function RoleSelected(props) {
  const classes = useStyles();
  const { handleSlect, values } = props;
  // const [value, setValue] = React.useState('user');

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  // const handleSlect = event => {
  //   setValue(event.target.value);
  // };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.font}>
        What would you like to use BYEDUST for?
      </Typography>
      <div className="role-selected-container">
        <Grid container spacing={3}>
            <div
              className={
                open ? "role-container right-panel-active" : "role-container"
              }
            >
              <RadioGroup value={values.role} onChange={handleSlect}>
              <div className="role-form-container role-tasker-container">
                <form action="#" className="role-form">
                  <img
                    src="https://www.airtasker.com/images/homepage/home-how-it-works-step-image-2.png"
                    alt="tasker"
                    className="role-img"
                  />
                  <FormControlLabel
                    value="tasker"
                    control={<Radio color="primary" />}
                    label="Tasker"
                    labelPlacement="top"
                  />
                </form>
              </div>
              <div className="role-form-container role-user-container">
                <form action="#" className="role-form">
                  <img
                    src="https://www.airtasker.com/images/homepage/home-how-it-works-step-image-1.png"
                    alt="user"
                    className="role-img"
                  />
                  <FormControlLabel
                    value="user"
                    control={<Radio color="primary" />}
                    label="User"
                    labelPlacement="top"
                  />
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <Typography variant="body1" gutterBottom>
                      Tell us what you need. It's FREE to post.
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClose}
                    >
                      Become User
                    </Button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <Typography variant="body1" gutterBottom>
                      Choose the right person for your task and get it done.
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleOpen}
                    >
                      Become Tasker
                    </Button>
                  </div>
                </div>
              </div>
              </RadioGroup>
            </div>
        </Grid>
      </div>
    </React.Fragment>
  );
}
