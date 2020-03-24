import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

import Info from "../components/details/Info";
import Reviews from "../components/details/Reviews";
import Sidebar from "../components/details/Siderbar";
import Header from "../components/details/Header";

import "../css/details/detail.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    marginTop: 120,
    marginBottom: 50,
    backgroundColor: "#FFF",
    borderRadius: 5,
    boxShadow: "0 0 4px rgba(0,0,0,.3)",
    padding: 0
  }
}));

const Details = props => {
  const classes = useStyles();

  return (
    <div className="detail">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" className={classes.root}>
          {/* <div className="row"> */}
          <div className="col-sm-12 no-gutters">
            {/* <div className="row justify-content-center"> */}
            {/* <div className="col-7"> */}
            <Header />
            {/* </div> */}
            {/* </div> */}
            <div className="row">
              <div className="col-4">
                <Sidebar />
              </div>
              <div className="col-8">
                <Info />
                <Reviews />
              </div>
            </div>
          </div>
          {/* </div> */}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Details;
