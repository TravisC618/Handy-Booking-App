import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import successIcon from "../../../../img/icons/offer-success.svg";
import accpetOfferIcon from "../../../../img/icons/accept-offer.svg";

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

const ConfirmPage = props => {
  const classes = useStyles();
  const { name: tradieName } = props.location.state;

  return (
    <DialogContent>
      <img src={accpetOfferIcon} alt="success-icon" className={classes.icon} />
      <Typography className={classes.typography} variant="h6">
        Congrats! You've assigned the task to {tradieName}.
      </Typography>
      <Typography className={classes.typography} variant="body2">
        Tip: It's a great way to ensure your task is efficiently completed by
        discussing details such as time/date, address and contact information.
        Go and send a private message now.
      </Typography>
    </DialogContent>
  );
};

export default withRouter(ConfirmPage);
