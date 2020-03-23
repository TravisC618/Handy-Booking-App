import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiDialogContent from "@material-ui/core/DialogContent";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import PaymentMethod from "./PaymentMethod";

const DialogContent = withStyles(theme => ({
  root: {
    padding: 0,
    overflowY: "hidden",
    minWidth: "400px",
    textAlign: "center",
    "&:first-child": {
      paddingTop: 0
    }
  }
}))(MuiDialogContent);

const useStyles = makeStyles({
  grid: {
    width: "auto"
  },
  avatar: {
    width: "100%",
    height: "100%"
  },
  userInfoWrapper: {
    backgroundColor: "rgb(246, 248, 253)",
    padding: "16px"
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "16px"
  },
  userInfoText: {
    fontSize: "14px",
    color: "rgb(41, 43, 50)",
    fontWeight: 500
  },
  fee: {
    fontSize: "15px",
    color: "#545a77"
  },
  tooltip: {
    marginLeft: "5px"
  },
  subtitle: {
    color: "rgb(187, 194, 220)",
    fontSize: "18px",
    textTransform: "capitalize",
    alignSelf: "flex-start"
  },
  summaryContent: {
    marginTop: "8px"
  },
  paymentContent: {
    padding: "20px 16px 0"
  },
  caption: {
    textAlign: "start",
    padding: "0 16px"
  },
  link: {
    color: "#ffa640",
    "&:hover, &:active": {
      color: "#49c5b6",
      textDecoration: "none"
    }
  }
});

const INFO =
  "This fee helps us cover the costs of keeping the platform running. Includes GST.";

const PaymentRequirement = props => {
  const classes = useStyles();
  const { name: tradieName, avatar, price } = props.location.state;
  const title = useSelector(state => state.task.taskDetails.title);
  const taskPrice = parseFloat(price).toFixed(2);
  const bookingFee = parseFloat(price * 0.1).toFixed(2);
  const total = (price + price * 0.1).toFixed(2);

  return (
    <DialogContent>
      <Grid
        container
        direction="row"
        justify="flex-start"
        className={classes.userInfoWrapper}
      >
        <Avatar>
          <img className={classes.avatar} src={avatar} alt="avatar" />
        </Avatar>
        <Grid className={classes.userInfo}>
          <Typography className={classes.userInfoText}>{tradieName}</Typography>
          <Typography className={classes.userInfoText}>{title}</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.paymentContent} container direction="column">
        <Typography className={classes.subtitle} variant="body1">
          Summary
        </Typography>
        <div className={classes.summaryContent}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              className={classes.grid}
              container
              direction="row"
              alignItems="center"
            >
              <Typography className={classes.fee} variant="body1">
                Task Price
              </Typography>
            </Grid>
            <Typography className={classes.fee} variant="body1">
              ${taskPrice}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              className={classes.grid}
              container
              direction="row"
              alignItems="center"
            >
              <Typography className={classes.fee} variant="body1">
                Booking Fee
              </Typography>
              <Tooltip
                title={INFO}
                className={classes.tooltip}
                aria-label="add"
                fontSize="small"
                color="action"
              >
                <InfoIcon />
              </Tooltip>
            </Grid>
            <Typography className={classes.fee} variant="body1">
              ${bookingFee}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1">${total}</Typography>
          </Grid>
        </div>
      </Grid>

      <Grid className={classes.paymentContent} container>
        <Typography className={classes.subtitle} variant="body1">
          Payment Methods
        </Typography>
        <PaymentMethod />
      </Grid>

      <Typography className={classes.caption} variant="caption" display="block">
        Payment will be secured inside
        <Link className={classes.link} to="#">
          {" "}
          Byedust Pay{" "}
        </Link>
        until you're happy the task has been completed
        <Link className={classes.link} to="#">
          {" "}
          View Terms &amp; Conditions.
        </Link>
      </Typography>
    </DialogContent>
  );
};

export default withRouter(PaymentRequirement);
