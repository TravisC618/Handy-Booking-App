import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BasicInformation from "./BasicInformation";
import MoreDetails from "./MoreDetails";
import { lengthCheck, isIncluded } from "../../utils/helper";

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
  }
}));

function getSteps() {
  return ["Set your basic personal information", "More Details", "Finish!"];
}

function getStepContent(step, handleChange, values) {
  switch (step) {
    case 0:
      return <BasicInformation values={values} handleChange={handleChange}/>;
    case 1:
      return <MoreDetails values={values} handleChange={handleChange}/>;
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

export default function ProfileStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };
  
  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    username: "",
    email:"",
    location: "",
    srcimage:"",
    err: {
      name: "",
      msg: ""
    },
  });

  const handleChange = event => {
    if (event.name) {
      setValues({ ...values, [event.name]: event.value });
      return;
    }
    const key = event.target.name;
    const value = event.target.value;
    
    setValues({ ...values, [key]: value });
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

        if (!lengthCheck(values.email.length, 1, 20)) {
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

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
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
          <div>
            <Typography className={classes.instructions} component={"span"}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div className="profile-content">
              <Typography className={classes.instructions} component={"span"}>
              {getStepContent(activeStep, handleChange, values)}
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
