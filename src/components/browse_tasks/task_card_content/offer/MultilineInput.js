import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    overflowY: "hidden"
  }
}))(MuiDialogContent);

const useStyles = makeStyles({
  dialogPaper: {
    minHeight: "530px",
    maxHeight: "90%"
  },
  multiline: {
    width: "100%",
    marginTop: "20px"
  }
});

const MultilineInput = props => {
  const classes = useStyles();
  const { values, setValues, err } = props;

  const handleChange = event => {
    const comment = event.target.value;
    setValues({ ...values, comment });
  };

  return (
    <DialogContent>
      <Typography variant="h6">
        Why are you the best person for this task?
      </Typography>
      <Typography variant="body2">
        For your safety, please do not share personal information, e.g. email,
        phone or address.
      </Typography>
      <TextField
        className={classes.multiline}
        placeholder="e.g. I will be great for this task. I have the necessary experience, skills and equipment required to get this done."
        multiline
        rows="4"
        variant="outlined"
        value={values.comment}
        onChange={handleChange}
        error={err.type === "comment"}
        helperText={err.type === "comment" && err.msg}
      />
    </DialogContent>
  );
};

export default MultilineInput;
