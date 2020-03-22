import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import HomepageImg from "../../../../img/homepage-image.jpg";
import Styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { getRoleId, isLoggedIn } from "../../../../utils/auth";
import { FIND_CLEANERS_URL } from "../../../../routes/URLMAP";

const BackgroundImage = HomepageImg;

const Headline = Styled.div`
position:relative;
margin:0;
margin-top:200px;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
transform: scale(0.75);
line-height: 0.6em;
font-family: 'Poppins', sans-serif;
transition: 0.3s all ease;


h1 {
  margin:0;
  padding:0;
  font-size: 7em;
  transition: 0.5s;
}
h1 span {
  position: relative;
  text-transform:uppercase;
  display: block;
  transition: 0.5s;
}
h1 span:nth-child(1):before {
  content: '';
  position: absolute;
  top:calc(50% - 15px);
  right:0;
  width: 50%;
  height:30px;
  background:rgb(255, 51, 102);
  transform-origin:right;
  transform:scaleX(0);
  transition:all 0.5s ease;
}
h1:hover span:nth-child(1):before {
  transform: scaleX(1);
}
h1 span:nth-child(2):before {
  content: '';
  position: absolute;
  top:calc(50% - 15px);
  left:0;
  width: 50%;
  height:30px;
  background:rgb(255, 51, 102);
  transform-origin:left;
  transform:scaleX(0);
  transition:0.5s;
}
h1:hover span:nth-child(2):before {
  transform: scaleX(1);
}
h1 span hide {
  transition: all ease 0.5s;
  transition-delay: 1s;
}
h1:hover span hide {
  transition: all ease 0.5s;
  transition-delay: 1s;
  color:rgb(255, 51, 102);
  opacity:0;
}
h1:hover span: nth-child(1) hide{
  padding-right:30px;
}
h1:hover span: nth-child(2) hide{
  padding-left:40px;
}
`;

const styles = theme => ({
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200,
    "&:hover": {
      textDecoration: "none",
      color: "#fff"
    },
    "&:focus": {
      textDecoration: "none",
      color: "#fff"
    }
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: "#fff"
    },
    "&:focus": {
      textDecoration: "none",
      color: "#fff"
    }
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
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

function ProductHero(props) {
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
    if (!getRoleId("customer")) {
      console.log(`not yet a customer`);
    }

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
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={BackgroundImage}
        alt="increase priority"
      />
      <Headline>
        <h1>
          <span>
            Do<hide>n't</hide>
          </span>
          <span>
            <hide>qu</hide>it
          </span>
        </h1>
      </Headline>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        The best person for the job isn't always who you think. Find the people
        with the skills you need on BYEDUST.
      </Typography>
      {renderButton()}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHero);
