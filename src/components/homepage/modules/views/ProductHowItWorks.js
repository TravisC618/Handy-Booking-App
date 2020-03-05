import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { FIND_CLEANERS_URL } from "../../../../routes/URLMAP";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ClImg from "../../../../img/homepage/productCurvyLines.png";
import "../../../../css/home/player.css";
import { Player, BigPlayButton, ControlBar, PlayToggle } from 'video-react';


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
    marginBottom: theme.spacing(4)
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
    marginTop: theme.spacing(8)
  }
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={ClImg} className={classes.curvyLines} alt="curvy lines" />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How does BYEDUST work?
        </Typography>
        <div>
          <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
              <div className={classes.item}>
                <Typography variant="h5" align="center" style={{paddingBottom:40}}>
                Check out the video below to see exactly how BYEDUST can help you get those to-dos done once and for all.
                </Typography>
                <Player 
                fluid={true}
                poster="https://www.airtasker.com/images/homepage/home-video-player.jpg"
                src="https://s3-ap-southeast-2.amazonaws.com/assets-airtasker-com/uploads/home/how-it-works.mp4"
                >
              <BigPlayButton position="center" />
              <ControlBar autoHide={true} disableDefaultControls={true}>
                <PlayToggle />
              </ControlBar>
            </Player>

              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img src="https://www.airtasker.com/images/homepage/home-how-it-works-step-image-1.png" alt="suitcase" className={classes.image} />
                <Typography variant="h5" align="center" style={{fontWeight: 'bold', paddingBottom:10}}>
                Post your Task
                </Typography>
                <Typography variant="h5" align="center">
                Tell us what you need. It's FREE to post.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img src='https://www.airtasker.com/images/homepage/home-how-it-works-step-image-2.png' alt="graph" className={classes.image} />
                <Typography variant="h5" align="center" style={{fontWeight: 'bold', paddingBottom:10}}>
                Review offers
                </Typography>
                <Typography variant="h5" align="center">
                Get offers from trusted Taskers and view profiles.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img src='https://www.airtasker.com/images/homepage/home-how-it-works-step-image-3.png' alt="clock" className={classes.image} />
                <Typography variant="h5" align="center" style={{fontWeight: 'bold', paddingBottom:10}}>
                Get it done
                </Typography>
                <Typography variant="h5" align="center">
                Choose the right person for your task and get it done.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Link to={FIND_CLEANERS_URL}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
          >
            Get started
          </Button>
        </Link>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
