import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";
import ClImg from "../../../../img/homepage/productCurvyLines.png";
import Pv1Img from "../../../../img/homepage/productValues1.svg";
import Pv2Img from "../../../../img/homepage/productValues2.svg";
import Pv3Img from "../../../../img/homepage/productValues3.svg";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={ClImg} className={classes.curvyLines} alt="curvy lines" />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Pv1Img} alt="suitcase" />
              <Typography variant="h6" className={classes.title}>
                Top rated insurance
              </Typography>
              <Typography variant="h5">
                {"Insurance is there to ease any worries "}
                {
                  "- making sure the Tasker has liability insurance from CGU while performing most task activities. T&C's apply."
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Pv2Img} alt="graph" />
              <Typography variant="h6" className={classes.title}>
                Verified badges
              </Typography>
              <Typography variant="h5">
                {
                  "Badges give members a bit more verified info when deciding who to work with on a task. Each badge has certain requirements that must be met and verified before they’re shown on the member's profile. "
                }
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img className={classes.image} src={Pv3Img} alt="clock" />

              <Typography variant="h6" className={classes.title}>
                Secure Payments
              </Typography>
              <Typography variant="h5">
                {
                  "We hold task payments secure with our PCI-DSS compliant Byedust Pay "
                }
                {
                  "– so tasks can be completed knowing payment is there when you're done."
                }
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
