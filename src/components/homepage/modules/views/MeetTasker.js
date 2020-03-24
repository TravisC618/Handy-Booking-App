import React from "react";
import Styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../components/Typography";
import { TaskerCardOne, TaskerCardTwo, TaskerCardThree } from "./TaskerCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { getRoleId, isLoggedIn } from "../../../../utils/auth";
import { FIND_CLEANERS_URL } from "../../../../routes/URLMAP";

const TaskerContainer = Styled.div`
background-color: #f6f8fd;
width: 100%;
display: flex;
justify-content: center;
padding: 0 20px;


.hometasks-nav {
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: hidden;
}


.taskerunderline-menu {
display: flex;
padding: 0;
margin: 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
list-style-type: none;
}
.taskerunderline-menu:hover li:not(:hover) a {
opacity: 0.2;
}
.taskerunderline-menu li {
position: relative;
}
.taskerunderline-menu li::after {
position: absolute;
content: "";
top: 100%;
left: 0;
width: 100%;
height: 2px;
background: #ff3366;
transform: scaleX(0);
transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.taskerunderline-menu li:hover::after, .taskerunderline-menu li.active::after {
transform: scaleX(1);
}

.taskerunderline-menu .active {
font-size: larger;
font-weight: bolder;
}


.taskerunderline-menu li a {
position: relative;
display: flex;
padding: 30px 25px 30px 25px;
text-decoration: none;
color: black;
transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.task_container {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin-top: 20px;
  padding: 0;
  height: 500px;
  width:100%;
  margin-bottom: 40px;
}

.tab-content-text {
    display: inline-block;
}
`;
const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    width: "70%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginBottom: theme.spacing(8)
  }
});

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15
  }
}))(Tooltip);

function MeetTasker(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    if (getRoleId("customer")) return;
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    if (getRoleId("customer")) return;
    setOpen(true);
  };

  const renderButton = () => {
    const linkTo = () => {
      if (isLoggedIn() && !getRoleId("customer")) return "#";

      return FIND_CLEANERS_URL;
    };

    return (
      <Link className={classes.link} to={linkTo()}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <LightTooltip
              PopperProps={{
                disablePortal: true
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Not yet a customer? Join us by registering a new customer account now!"
            >
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                onClick={handleTooltipOpen}
              >
                GET STARTED
              </Button>
            </LightTooltip>
          </div>
        </ClickAwayListener>
      </Link>
    );
  };

  return (
    <section className={classes.root}>
      <TaskerContainer>
        <nav className="hometasks-nav">
          <div className="home-heading">
            <Typography
              variant="h4"
              marked="center"
              className={classes.title}
              component="h2"
            >
              Meet some Taskers!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ paddingBottom: 40 }}
            >
              Discover the story behind the people that are making the BYEDUST
              community great, how and why they do what they do.
            </Typography>
          </div>
          <ul className="nav taskerunderline-menu" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="one-label"
                data-toggle="tab"
                href="#one-id"
                role="tab"
                aria-controls="one-ac"
                aria-selected="true"
              >
                Samantha
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="two-label"
                data-toggle="tab"
                href="#two-id"
                role="tab"
                aria-controls="two-ac"
                aria-selected="false"
              >
                Emily
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="three-label"
                data-toggle="tab"
                href="#three-id"
                role="tab"
                aria-controls="three-ac"
                aria-selected="false"
              >
                Brendan
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="task_container tab-pane fade show active"
              id="one-id"
              role="tabpanel"
              aria-labelledby="one-label"
            >
              <div className="tab-content-text">
                <TaskerCardOne />
              </div>
            </div>
            <div
              className="task_container tab-pane fade"
              id="two-id"
              role="tabpanel"
              aria-labelledby="two-label"
            >
              <div className="tab-content-text">
                <TaskerCardTwo />
              </div>
            </div>
            <div
              className="task_container tab-pane fade"
              id="three-id"
              role="tabpanel"
              aria-labelledby="three-label"
            >
              <div className="tab-content-text">
                <TaskerCardThree />
              </div>
            </div>
          </div>
          {renderButton()}
        </nav>
      </TaskerContainer>
    </section>
  );
}

export default withStyles(styles)(MeetTasker);
