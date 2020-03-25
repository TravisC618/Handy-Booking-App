import React from "react";
import "../../css/find_cleaners/estimated.css";

const Estimated = props => {
  return (
    <div className="estimated-block col-sm-12 col-md-6">
      <div className="card card-body">
        <h5 className="card-title">estimated price*</h5>
        <span className="price">$50 - $70</span>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fas fa-check" />
            Get instant quotes in minutes
          </li>
          <li className="list-group-item">
            <i className="fas fa-check" />
            1000's of reviewd cleaners
          </li>
          <li className="list-group-item">
            <i className="fas fa-check" />
            It's free to try - give it a go!
          </li>
        </ul>
        <a href="/find-cleaners" className="btn btn-primary">
          Find a cleaner
        </a>
        <p className="card-text">
          <small className="text-muted">
            *Based on average cleaning task prices, marketplace prices may vary.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Estimated;
