import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PaymentRequirement from "./PaymentRequirement";
import LinearIndeterminate from "../../../../UI/LinearIndeterminate";
import { TASK_URL } from "../../../../routes/URLMAP";
import ConfirmPage from "./ConfirmPage";
import {
  UPDATE_LOADING_STATE,
  UPDATE_DETAIL_STATE
} from "../../../../redux/actions/taskAction";
import { reqGetTask } from "../../../../api/tasks";
import { reqAssignTask } from "../../../../api/customer";
import "../../../../css/browse_tasks/accpet-offer.scss";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function getSteps() {
  return ["PaymentRequirement", "SuccessPage"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PaymentRequirement />;
    case 1:
      return <ConfirmPage />;
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(1)
  },
  error: {
    padding: "20px"
  }
}));

function AcceptOfferModel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    match: {
      params: { taskId, customerId, tradieId }
    },
    history
  } = props;
  const steps = getSteps();
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [err, setErr] = useState({
    type: "",
    msg: ""
  });
  const dispatch = useDispatch();

  // after accept refresh current task details
  async function fetchTaskDetail() {
    try {
      dispatch({ type: UPDATE_LOADING_STATE });
      const response = await reqGetTask(taskId);
      const taskDetails = response.data.data;
      dispatch({ type: UPDATE_DETAIL_STATE, taskDetails });
      dispatch({ type: UPDATE_LOADING_STATE });
    } catch (error) {
      history.push(TASK_URL);
      dispatch({ type: UPDATE_LOADING_STATE });
    }
  }

  const handleClose = () => {
    activeStep === 1 && fetchTaskDetail();

    history.goBack();
    // history.replace(`${TASK_URL}/${taskId}`);
  };

  const handleAccept = async () => {
    // axios request
    setIsLoading(true);
    try {
      const response = await reqAssignTask(customerId, taskId, tradieId);
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setErr({ type: "request", msg: message });
        setIsLoading(false);
      }
    }
  };

  const handleNext = async () => {
    await handleAccept();
    activeStep === 1 && handleClose();

    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const renderButtonText = () => {
    switch (activeStep) {
      case 0:
        return "Confirm";
      case 1:
        return "Finish";
      default:
        return "Next";
    }
  };

  const titleText = () => {
    if (!!err.type) return "Error";

    if (activeStep === 0) return "Payment required";

    return "Assigned successfully";
  };

  const renderModelContent = () => {
    if (err.type === "request") {
      return (
        <Alert className={classes.error} variant="filled" severity="error">
          {err.msg}
        </Alert>
      );
    }

    return (
      <div className="accept-model-content">
        {getStepContent(activeStep)}
        <div className="accept-model-button-group">
          <Button variant="contained" color="primary" onClick={handleNext}>
            {renderButtonText()}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Button variant="outlined" color="primary">
        Open dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="accpet-offer-title"
        open={true}
      >
        <div className="accept-model-wrapper">
          {isLoading && <LinearIndeterminate />}
          <DialogTitle
            id="accpet-offer-title"
            className="accpet-offer-title"
            onClose={handleClose}
          >
            {titleText()}
          </DialogTitle>
          {renderModelContent()}
        </div>
      </Dialog>
    </div>
  );
}

export default withRouter(AcceptOfferModel);
