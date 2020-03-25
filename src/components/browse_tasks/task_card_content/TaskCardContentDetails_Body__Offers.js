import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { ADD_TASK_OFFER_URL } from "../../../routes/URLMAP";
import OfferLists from "./OfferLists";
import { isLoggedIn, getRoleId } from "../../../utils/auth";
import { HANDLE_VISIBLE } from "../../../redux/actions/loginAction";
import waitForOffer from "../../../img/waiting-for-offers.png";
import "../../../css/browse_tasks/TaskCardContentDetails_Body__Offers.scss";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexShrink: 0,
    marginTop: "20px !important"
  }
}));

function Offers(props) {
  const classes = useStyles();
  const {
    location: { pathname: currentPath }
  } = props;
  const dispatch = useDispatch();
  const taskDetails = useSelector(state => state.task.taskDetails);
  const isFetchingDetails = useSelector(state => state.task.isFetchingDetails);
  const offers = taskDetails.offers;

  const customerId = getRoleId("customer");
  const tradieId = getRoleId("tradie");
  const offerLink =
    !!tradieId && `${currentPath}${ADD_TASK_OFFER_URL}/${tradieId}`;

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleOnClick = () => {
    if (!isLoggedIn()) {
      dispatch({ type: HANDLE_VISIBLE, isVisible: true });
    }
  };

  const renderOffers = () => {
    if (!isFetchingDetails) {
      if (!!offers && offers.length !== 0) {
        return (
          <OfferLists offers={offers} isFetchingDetails={isFetchingDetails} />
        );
      }

      const currTaskCustomerId =
        taskDetails.customer && taskDetails.customer._id;

      if (customerId === currTaskCustomerId) {
        return (
          <div className="offers">
            <p className="center margin-20-top">
              <img src={waitForOffer} alt="offers" />
            </p>
            <p>Wait for offers...</p>
          </div>
        );
      }
    }

    const renderButton = () => {
      if (isFetchingDetails || !taskDetails.customer) return;
      const currTaskCustomerId = taskDetails.customer._id;

      if (taskDetails.status !== "open") {
        if (customerId === currTaskCustomerId) {
          return (
            <Link to={offerLink} onClick={handleOnClick}>
              <button
                type="button"
                className="button-med full-width action-type button-cta button-make-offer"
                onClick={handleTooltipOpen}
              >
                Private message
              </button>
            </Link>
          );
        }

        return (
          <button
            type="button"
            className="button-med full-width action-type button-cta not-open"
          >
            {taskDetails.status}
          </button>
        );
      }

      if (isLoggedIn() && !getRoleId("tradie")) {
        return (
          <Link to={offerLink} onClick={handleOnClick}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                PopperProps={{
                  disablePortal: true
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Not yet a tradie? Join us by registering a new tradie account now!"
              >
                <button
                  type="button"
                  className="button-sml button-cta offer-button center"
                  onClick={handleTooltipOpen}
                >
                  Make an offer
                </button>
              </Tooltip>
            </ClickAwayListener>
          </Link>
        );
      }
      return (
        <Link to={offerLink} onClick={handleOnClick}>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <button
              type="button"
              className="button-sml button-cta offer-button center"
              onClick={handleTooltipOpen}
            >
              Make an offer
            </button>
          </ClickAwayListener>
        </Link>
      );
    };

    return (
      <div className="offers">
        <p className="center margin-20-top">
          <img src={waitForOffer} alt="offers" />
        </p>
        <div>{renderButton()}</div>
      </div>
    );
  };

  return (
    <div>
      <Typography className={classes.heading} variant="h6" color="primary">
        OFFERS
      </Typography>
      {renderOffers()}
    </div>
  );
}

export default withRouter(Offers);
