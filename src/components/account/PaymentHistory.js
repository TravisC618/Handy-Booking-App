import React from "react";
import { Link } from "react-router-dom";

import history from "../../img/payment_history.webp";
import earned from "../..//img/payments_earned.webp";
import "../../css/account/payment-history.css";

const PaymentHistory = props => {
  return (
    <div className="history vertical-scroll">
      <div className="history__page">
        <div className="history__page-header">
          <h4>Payments History</h4>
        </div>
        <div className="history__page-inner">
          <div className="payments-direction">
            <div className="tabs">
              <span className="tab half active" data-ui-test="tab-incoming">
                Earned
              </span>
              <span className="tab half" data-ui-test="tab-outgoing">
                Outgoing
              </span>
            </div>
          </div>
          <div className="history__filters-date">
            <div className="history__filters-filter">
              <label className="history__filters-label">Showing</label>
              <div className="history__date-selector">
                <select name="date" className="history__date-select">
                  <option value="allTime">All</option>
                  <option value="range">Range</option>
                </select>
              </div>
            </div>
          </div>
          <div className="history__amount">
            <div className="history__amount-label">
              <span>Net Earned</span>
            </div>
            <h4 className="history__amount-value">
              <span data-ui-test="net-amount">$0.00</span>
            </h4>
          </div>
        </div>
        <div className="transaction-results">
          <div className="padder">
            <div className="transaction-count">
              <span className="number">0 transactions for</span>
              <span className="date-range"> 1st Jan 2012 - 7th Mar 2020</span>
            </div>
          </div>
          <div className="padder">
            <div className="empty__page">
              <img
                src={earned}
                alt="no_results"
                className="empty__page-EmptyImg"
              />
              <p className="page__text">
                You haven't earned from any tasks yet. Yet to find the right
                task?
              </p>
              <Link className="page__button" to="/tasks">
                Browse tasks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
