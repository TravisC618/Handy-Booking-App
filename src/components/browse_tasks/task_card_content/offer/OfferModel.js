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
import "../../../../css/browse_tasks/offer-mode.scss";
import MultilineInput from "./MultilineInput";
import AskPrice from "./AskPrice";
import SuccessPage from "./SuccessPage";
import LinearIndeterminate from "../../../../UI/LinearIndeterminate";
import { TASK_URL } from "../../../../routes/URLMAP";
import { getRoleId } from "../../../../utils/auth";
import {
  UPDATE_LOADING_STATE,
  UPDATE_DETAIL_STATE
} from "../../../../redux/actions/taskAction";
import { reqAddOffer, reqGetTask } from "../../../../api/tasks";

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
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
}

function getStepContent(stepIndex, values, setValues, err) {
  switch (stepIndex) {
    case 0:
      return <AskPrice values={values} setValues={setValues} err={err} />;
    case 1:
      return <MultilineInput values={values} setValues={setValues} err={err} />;
    case 2:
      return <SuccessPage />;
    default:
      return "Unknown stepIndex";
  }
}

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(1)
  }
}));

function OfferModel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    match: {
      params: { taskId }
    },
    history
  } = props;
  const steps = getSteps();
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({
    price: "",
    comment: ""
  });
  const [err, setErr] = useState({
    type: "",
    msg: ""
  });
  const dispatch = useDispatch();

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
    activeStep === 2 && fetchTaskDetail();

    history.replace(`${TASK_URL}/${taskId}`);
  };

  const handleSubmit = async () => {
    const tradieId = getRoleId("tradie");
    if (!tradieId) {
      setErr({ type: "role", msg: "Current user is not yet a tradie" });
      return false;
    }

    // axios request
    setIsLoading(true);
    try {
      const response = await reqAddOffer(values, taskId, tradieId);
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
    switch (activeStep) {
      case 0:
        if (values.price < 5 || values.price > 9999) {
          setErr({
            type: "price",
            msg: "Please enter an amount between $5 and $9,999"
          });
          return;
        }
        break;
      case 1:
        if (values.comment.length < 15 || values.comment.length > 1500) {
          setErr({
            type: "comment",
            msg: "Please enter a comment between 15 and 1500 characters"
          });
          return;
        }
        await handleSubmit();
        break;
      case 2:
        handleClose();
        break;
      default:
        return;
    }

    activeStep !== 1 && setErr({ type: "", msg: "" });

    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const renderButtonText = () => {
    switch (activeStep) {
      case 0:
        return "Next";
      case 1:
        return "Submit";
      case 2:
        return "Finish";
      default:
        return "Next";
    }
  };

  const renderModelContent = () => {
    if (err.type === "request") {
      return (
        <Alert variant="filled" severity="error">
          {err.msg}
        </Alert>
      );
    }

    return activeStep === steps.length ? (
      <div>{"page of the last step"}</div>
    ) : (
      <div className="dialog-content">
        {getStepContent(activeStep, values, setValues, err)}
        <div className="dialog-button-group">
          {activeStep !== 2 && (
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
          )}
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
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <div className="dialog-wrapper">
          {isLoading && <LinearIndeterminate />}
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Make an Offer
          </DialogTitle>
          {renderModelContent()}
        </div>
      </Dialog>
    </div>
  );
}

export default withRouter(OfferModel);
