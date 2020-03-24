import React from "react";
import Styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Typography from "../components/Typography";
import PlayingCarouselRight from "../../modules/views/PlayingCarouselRight";
import PlayingCarouselLeft from "../../modules/views/PlayingCarouselLeft";

const TaskContainer = Styled.div`
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


.underline-menu {
display: flex;
padding: 0;
margin: 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
list-style-type: none;
}
.underline-menu:hover li:not(:hover) a {
opacity: 0.2;
}
.underline-menu li {
position: relative;
}
.underline-menu li::after {
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
.underline-menu li:hover::after, .underline-menu li.active::after {
transform: scaleX(1);
}

.underline-menu .active {
font-size: larger;
font-weight: bolder;
}


.underline-menu li a {
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
}

.tab-content-text {
    width: 760px;
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
    marginTop: theme.spacing(8)
  }
});

function ProductTasks(props) {
  const { classes } = props;

  return (
    <TaskContainer>
      <nav className="hometasks-nav">
        <div className="home-heading">
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
            component="h2"
          >
            See what they are getting done
          </Typography>
        </div>
        <ul className="nav underline-menu" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mh-label"
              data-toggle="tab"
              href="#mh-id"
              role="tab"
              aria-controls="mh-ac"
              aria-selected="true"
            >
              Moving home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="sab-label"
              data-toggle="tab"
              href="#sab-id"
              role="tab"
              aria-controls="sab-ac"
              aria-selected="false"
            >
              Starting a business
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="fs-label"
              data-toggle="tab"
              href="#fs-id"
              role="tab"
              aria-controls="fs-ac"
              aria-selected="false"
            >
              Fixing stuff
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="hap-label"
              data-toggle="tab"
              href="#hap-id"
              role="tab"
              aria-controls="hap-ac"
              aria-selected="false"
            >
              Hosting a party
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="sd-label"
              data-toggle="tab"
              href="#sd-id"
              role="tab"
              aria-controls="sd-ac"
              aria-selected="false"
            >
              Something different
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="task_container tab-pane fade show active"
            id="mh-id"
            role="tabpanel"
            aria-labelledby="mh-label"
          >
            <div className="tab-content-text">
              <Typography
                variant="h5"
                align="left"
                style={{
                  paddingBottom: 30,
                  fontSize: "small",
                  fontFamily:
                    "museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
                }}
              >
                Got a few boxes to shift, an apartment or entire house? Get your
                home moved just the way you want, by whom you want, when you
                want. Let Airtasker shoulder the load.
              </Typography>
            </div>
            <PlayingCarouselLeft />
            <PlayingCarouselRight />
          </div>
          <div
            className="task_container tab-pane fade"
            id="sab-id"
            role="tabpanel"
            aria-labelledby="sab-label"
          >
            <div className="tab-content-text">
              <Typography
                variant="h5"
                align="left"
                style={{
                  paddingBottom: 30,
                  fontSize: "small",
                  fontFamily:
                    "museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
                }}
              >
                Taking a big leap and need some expert advice or assistance?
                Airtasker can help you get some cracking marketing collateral,
                admin muscle or a few extra hands to help ease the burden.
              </Typography>
            </div>
            <PlayingCarouselLeft />
            <PlayingCarouselRight />
          </div>
          <div
            className="task_container tab-pane fade"
            id="fs-id"
            role="tabpanel"
            aria-labelledby="fs-label"
          >
            <div className="tab-content-text">
              <Typography
                variant="h5"
                align="left"
                style={{
                  paddingBottom: 30,
                  fontSize: "small",
                  fontFamily:
                    "museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
                }}
              >
                Do you have a hole in the wall that needs plugging? Perhaps a TV
                that needs mounting? Or maybe you have that perfect shade of
                green, but no time to paint? Get a Tasker to help.
              </Typography>
            </div>
            <PlayingCarouselLeft />
            <PlayingCarouselRight />
          </div>
          <div
            className="task_container tab-pane fade"
            id="hap-id"
            role="tabpanel"
            aria-labelledby="hap-label"
          >
            <div className="tab-content-text">
              <Typography
                variant="h5"
                align="left"
                style={{
                  paddingBottom: 30,
                  fontSize: "small",
                  fontFamily:
                    "museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
                }}
              >
                Got something to celebrate and the guest list all ready, but
                need everything else? Let Airtasker help you find the best
                bartenders, party planners, photographers and entertainment in
                the land.
              </Typography>
            </div>
            <PlayingCarouselLeft />
            <PlayingCarouselRight />
          </div>
          <div
            className="task_container tab-pane fade"
            id="sd-id"
            role="tabpanel"
            aria-labelledby="sd-label"
          >
            <div className="tab-content-text">
              <Typography
                variant="h5"
                align="left"
                style={{
                  paddingBottom: 30,
                  fontSize: "small",
                  fontFamily:
                    "museo_sans,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif"
                }}
              >
                Want something done but feel like it’s too random? Whether it’s
                getting rescued from a spider or help building a bobsled - you
                can get nearly anything done through Airtasker.
              </Typography>
            </div>
            <PlayingCarouselLeft />
            <PlayingCarouselRight />
          </div>
        </div>
      </nav>
    </TaskContainer>
  );
}

export default withStyles(styles)(ProductTasks);
