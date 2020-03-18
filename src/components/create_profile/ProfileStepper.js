import React, { useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BasicInformation from "./BasicInformation";
import MoreDetails from "./MoreDetails";
import { lengthCheck, isIncluded } from "../../utils/helper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import RoleSelected from "./RoleSelected";
import "../../css/create_profile/basic-information.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  font: {
    fontSize: 25,
    textTransform: "initial"
  }
}));

function getSteps() {
  return ["Set your basic information", "More Details", "Finish!"];
}

function getStepContent(
  step,
  handleChange,
  handleAvatar,
  handleLanguageSelector,
  handleSlect,
  values
) {
  switch (step) {
    case 0:
      return <BasicInformation values={values} handleChange={handleChange} />;
    case 1:
      return (
        <MoreDetails
          values={values}
          handleChange={handleChange}
          handleAvatar={handleAvatar}
          handleLanguageSelector={handleLanguageSelector}
        />
      );
    case 2:
      return <RoleSelected values={values} handleSlect={handleSlect} />;
    default:
      return "Unknown step";
  }
}

function ProfileStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { handleShowModal, handleCloseModal, showModal } = props;

  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    location: "",
    language: [],
    gender: "",
    mobile: "",
    introduction: "",
    role: "",
    srcimage:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png",
    err: {
      name: "",
      msg: "",
      warning: false
    }
  });

  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    if (event.name) {
      setValues({ ...values, [event.name]: event.value });
      return;
    }
    const key = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [key]: value });
  };

  const handleAvatar = value => {
    setValues({ ...values, srcimage: value });
  };

  const handleLanguageSelector = value => {
    setValues({ ...values, language: value });
  };

  const handleSlect = event => {
    setValues({ ...values, role: event.target.value });
  };

  const handleSubmit = () => {
    // redirect to homepage in 5 sec
    setTimeout(() => {
      handleCloseModal();
      props.history.replace("/tasks");
    }, 5000);
  };

  const handleSubmitNow = () => {
    // redirect to homepage now
    handleCloseModal();
    props.history.replace("/tasks");
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (!lengthCheck(values.firstname.length, 1, 20)) {
          setValues({
            ...values,
            err: {
              name: "firstname",
              msg: "Your first name must be provided"
            }
          });
          return;
        }
        if (!lengthCheck(values.lastname.length, 1, 20)) {
          setValues({
            ...values,
            err: {
              name: "lastname",
              msg: "Your last name must be provided"
            }
          });
          return;
        }

        if (!lengthCheck(values.email.length, 1, 40)) {
          setValues({
            ...values,
            err: {
              name: "email",
              msg: "Your email must be provided"
            }
          });
          return;
        }
        if (!isIncluded(values.email, "@")) {
          setValues({
            ...values,
            err: {
              name: "email",
              msg: "Please provide a valid email"
            }
          });
          return;
        }
        if (!lengthCheck(values.location.length, 1, 50)) {
          setValues({
            ...values,
            err: {
              name: "location",
              msg: "Your location must be provided"
            }
          });
          return;
        }
        break;
      case 1:
        if (!lengthCheck(values.gender.length, 1, 10)) {
          setValues({
            ...values,
            err: {
              name: "gender",
              msg: "Please select your gender"
            }
          });
          return;
        }
        if (!lengthCheck(values.mobile.length, 1, 20)) {
          setValues({
            ...values,
            err: {
              name: "mobile",
              msg: "Please set your mobile number"
            }
          });
          return;
        }
        if (!lengthCheck(values.introduction.length, 1, 100)) {
          setValues({
            ...values,
            err: {
              name: "introduction",
              msg: "Tell us something about yourself?"
            }
          });
          return;
        }
        break;
      case 2:
        if (!lengthCheck(values.role.length, 1, 10)) {
          setValues({
            ...values,
            err: {
              warning: true
            }
          });
          return;
        }
        handleSubmit();
        break;

      default:
        return;
    }
    // Once pass validation, set err empty
    setValues({ ...values, err: { name: "", msg: "" } });
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setOpen(false);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWarningClose = () => {
    setValues({
      ...values,
      err: {
        warning: false
      }
    });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption" component={"span"}>
                Optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className="all-finish">
            <Typography variant="h6" gutterBottom className={classes.font}>
              All steps completed - you&apos;re finished
            </Typography>
            <CountDown startCount={5}>
              {count => (
                <div className="redirect-container">
                  <Typography
                    className={classes.instructions}
                    component={"span"}
                  >
                    The Page will automatically redirect after {count} seconds
                  </Typography>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmitNow}
                    style={{ marginTop: 60, width:"50%" }}
                  >
                    Get Start Now
                  </Button>
                </div>
              )}
            </CountDown>
          </div>
        ) : (
          <div>
            <div className="profile-content">
              <Typography className={classes.instructions} component={"span"}>
                {getStepContent(
                  activeStep,
                  handleChange,
                  handleAvatar,
                  handleLanguageSelector,
                  handleSlect,
                  values
                )}
              </Typography>
            </div>
            <div className="profile-content-button">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <React.Fragment>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.font}
                      >
                        Are you sure you want to skip this step?
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        You can choose to skip this step now, and then you can
                        set it or change it later in your account settings. If
                        you are a tasker, a complete profile will effectively
                        help you successfully receive a task.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Set Now
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        className={classes.button}
                      >
                        Skip
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              )}
              <React.Fragment>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
                <Dialog
                  open={values.err.warning}
                  onClose={handleWarningClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      You must choose a role.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleWarningClose}
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Set Now
                    </Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

class CountDown extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      count: this.props.startCount
    };
  }

  componentDidMount() {
    this.intervalHandle = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({ count: newCount });
      } else {
        window.clearInterval(this.intervalHandle);
      }
    }, 1000);
  }

  render() {
    return this.props.children(this.state.count);
  }
}

export default withRouter(ProfileStepper);
