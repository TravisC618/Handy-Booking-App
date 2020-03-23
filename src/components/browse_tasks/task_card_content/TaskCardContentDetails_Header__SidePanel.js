import React from "react";
import { Link, withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { getRoleId } from "../../../utils/auth";
import { ADD_TASK_OFFER_URL } from "../../../routes/URLMAP";
import { isLoggedIn } from "../../../utils/auth";
import { HANDLE_VISIBLE } from "../../../redux/actions/loginAction";
import "../../../css/browse_tasks/TaskCardContentDetails_Header__SidePanel.css";

const SidePanel = props => {
  const {
    location: { pathname: currentPath }
  } = props;
  const tradieId = getRoleId("tradie");
  const customerId = getRoleId("customer");
  const offerLink =
    !!tradieId && `${currentPath}${ADD_TASK_OFFER_URL}/${tradieId}`;

  const isFetchingDetails = useSelector(state => state.task.isFetchingDetails);
  const taskDetails = useSelector(state => state.task.taskDetails);
  const budget = taskDetails.budget;

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = currTaskCustomerId => {
    if (customerId === currTaskCustomerId) return;
    setOpen(true);
  };

  const handleOnClick = () => {
    if (!isLoggedIn()) {
      dispatch({ type: HANDLE_VISIBLE, isVisible: true });
    }
  };

  const renderButton = () => {
    if (isFetchingDetails || !taskDetails.customer) return;
    const currTaskCustomerId = taskDetails.customer._id;

    if (isLoggedIn() && !getRoleId("tradie")) {
      return (
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
            className="button-med full-width action-type button-cta button-make-offer"
            onClick={event => handleTooltipOpen(currTaskCustomerId)}
          >
            {customerId === currTaskCustomerId
              ? "Review offers"
              : "Make an offer"}
          </button>
        </Tooltip>
      );
    }
    return (
      <button
        type="button"
        className="button-med full-width action-type button-cta button-make-offer"
        onClick={handleTooltipOpen}
      >
        Make an offer
      </button>
    );
  };

  return (
    <div class="payment_panel__Wrapper-ots126-0 hpWFks">
      <div class="payment_panel__TitleWrapper-ots126-1 bYkcIZ">Task Budget</div>
      <div class="payment_panel__PriceWrapper-ots126-2 dArxuO">
        <div class="payment_panel__TaskPriceWrapper-ots126-5 ceFDqT">
          <div class="task-price">
            <div class="currency-symbol">
              <div class="price text-h2">
                <span data-ui-test="task-price">${budget}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment_panel__AddFundsWrapper-ots126-3 knxrjg"></div>
      <div class="payment_panel__CtaWrapper-ots126-4 dUABLd">
        <div data-ui-test="task-details-payment-panel">
          <Link to={offerLink} onClick={handleOnClick}>
            {renderButton()}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SidePanel);
