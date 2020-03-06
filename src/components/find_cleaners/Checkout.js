import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import TaskDescription from "./TaskDescription";
import LocationNTime from "./LocationNTime";
import StepConnector from "@material-ui/core/StepConnector";
import Budget from "./Budget";
import { lengthCheck } from "../../utils/helper";
import TaskBreadcrumbs from "./BreadCrumbs";
import { getUserId } from "../../utils/auth";
import { reqPostTask } from "../../api/tasks";
import "../../css/theme.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Byedust
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(10),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "#fff",
    background: "#f50057",
    "&:hover, &:focus": {
      background: "#f50057"
    }
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  breadcrumbs: {
    marginBottom: theme.spacing(4)
  }
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#ff3366"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#ff3366"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#784af4"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#ff3366"
  },
  completed: {
    color: "#ff3366",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

const steps = ["Task description", "Location & Time", "Budget"];

function getStepContent(step, handleChange, values) {
  switch (step) {
    case 0:
      return <TaskDescription values={values} handleChange={handleChange} />;
    case 1:
      return <LocationNTime values={values} handleChange={handleChange} />;
    case 2:
      return <Budget values={values} handleChange={handleChange} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({
    title: "",
    details: "",
    location: "",
    dueDate: new Date(),
    radio: "Total",
    amount: "",
    hour: "1",
    err: {
      name: "",
      msg: ""
    },
    taskId: ""
  });

  const isPositiveNum = (key, value) => {
    if (key === "amount" || key === "hour") {
      if (isNaN(value)) {
        return false;
      }
    }
    return true;
  };

  const handleChange = event => {
    if (event.name) {
      setValues({ ...values, [event.name]: event.value });
      return;
    }
    const key = event.target.name;
    const value = event.target.value;
    // validates amount & hour input
    if (!isPositiveNum(key, value)) {
      return;
    }
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = () => {
    const { title, details, location, dueDate, amount, hour, radio } = values;

    // total budget
    const budget = radio === "Total" ? amount : amount * hour;
    const taskDetails = { title, details, location, dueDate, budget };
    console.log(taskDetails);
    reqPostTask(taskDetails, getUserId())
      .then(response => console.log(response))
      .catch(err => {
        if (err.response) {
          console.log(err.response);
          const { message } = err.response.data;
          setValues({ ...values, err: { name: "post", msg: message } });
        }
      });
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (!lengthCheck(values.title.length, 10, 50)) {
          setValues({
            ...values,
            err: {
              name: "title",
              msg: "title must be more than 10 and less than 50 characters"
            }
          });
          return;
        }
        if (!lengthCheck(values.details.length, 25, 1000)) {
          setValues({
            ...values,
            err: {
              name: "details",
              msg: "details must be more than 25 and less than 1000 characters"
            }
          });
          return;
        }
        break;
      case 1:
        if (!values.location) {
          setValues({
            ...values,
            err: {
              name: "location",
              msg: "Invalid location"
            }
          });
          return;
        }
        break;
      case 2:
        if (!values.amount) {
          setValues({
            ...values,
            err: {
              name: "budget",
              msg: "* You should give a budget before posting"
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
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={0}>
          <Grid className={classes.breadcrumbs}>
            <TaskBreadcrumbs />
          </Grid>
          <Typography component="h1" variant="h4" align="center">
            Post a task
          </Typography>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  You've successfully posted!
                </Typography>
                <Typography variant="subtitle1">
                  {values.err.name === "post"
                    ? values.err.msg
                    : `Your task id is ${values.taskId}. We have emailed your task
                  confirmation, and will send you an update when your task has
                  any offer or comment.`}
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, handleChange, values)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Post now" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
