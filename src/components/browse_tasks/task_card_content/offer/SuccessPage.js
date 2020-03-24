import React from "react";
import { useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import successIcon from "../../../../img/icons/offer-success.svg";

const DialogContent = withStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
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
  },
  icon: {
    width: "88px",
    alignSelf: "center",
    marginBottom: "30px"
  },
  typography: {
    margin: "5px"
  }
});

const SuccessPage = () => {
  const classes = useStyles();
  const customer = useSelector(state => state.task.taskDetails.customer);
  let customerName = "Peter Ham";
  if (customer) {
    customerName = customer.name || customer.username;
  }

  return (
    <DialogContent>
      <img src={successIcon} alt="success-icon" className={classes.icon} />
      <Typography className={classes.typography} variant="h6">
        Congrats! We've sent your offer onto {customerName} to view.
      </Typography>
      <Typography className={classes.typography} variant="body2">
        Completing tasks will build your Byedust reputation with reviews and
        increase your Completion Rate to help you earn more.
      </Typography>
    </DialogContent>
  );
};

export default SuccessPage;
