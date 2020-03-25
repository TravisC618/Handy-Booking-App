import React from "react";
import "../../css/details/reviews.css";

const Reviews = props => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <div className="row no-gutters">
          <div className="col">
            <h4>
              <strong>Reviews</strong>
            </h4>
          </div>

          <div className="col-auto">
            <div className="star-header">
              <i className="fas fa-star fa-2x"></i>
              <i className="fas fa-star fa-2x"></i>
              <i className="fas fa-star fa-2x"></i>
              <i className="fas fa-star fa-2x"></i>
              <i className="fas fa-star fa-2x"></i>
            </div>
            <div className="content-header">
              <h4>4.9 stars from 96 reviews</h4>
              <h5>98% Completion rate</h5>
              <h6>106 Completion tasks</h6>
            </div>
          </div>
          <div className="col col-3">
            <div className="star-rank">
              <div className="five-star">
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="total-star">88</i>
              </div>

              <div className="four-star">
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="total-star">6</i>
              </div>
              <div className="three-star">
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="total-star">2</i>
              </div>
              <div className="two-star">
                <i className="fas fa-star fa-1x"></i>
                <i className="fas fa-star fa-1x"></i>
                <i className="total-star">0</i>
              </div>
              <div className="one-star">
                <i className="fas fa-star fa-1x"></i>
                <i className="total-star">0</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            As a Tasker
          </a>
          <a
            className="nav-item nav-link"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            As a Poster
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="review-container">
            <div className="review">
              <div className="review-stars">
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
              </div>

              <div className="review-text">
                <p>
                  Turned up on time were helpful and professional. The guys
                  clear about what was possible and what was not. I was
                  impressed with their work.
                </p>
              </div>
              <div className="review-reviewer">
                <div className="avatar">
                  <img src="https://picsum.photos/50/50" alt="" />
                </div>
                <div className="reviewer">Kelly McNamara</div>
              </div>
            </div>

            <div className="review">
              <div className="review-stars">
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
              </div>

              <div className="review-text">
                <p>
                  On time. Great job. Very kind and considerate. House looks
                  great. She was efficient and detailed. I would definitely
                  recommend her to others.
                </p>
              </div>
              <div className="review-reviewer">
                <div className="avatar">
                  <img src="https://picsum.photos/50/50" alt="" />
                </div>
                <div className="reviewer">Aisling McCool</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="review-container">
            <div className="review">
              <div className="review-stars">
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
              </div>

              <div className="review-text">
                <p>
                  Turned up on time were helpful and professional. The guys
                  clear about what was possible and what was not. I was
                  impressed with their work.
                </p>
              </div>
              <div className="review-reviewer">
                <div className="avatar">
                  <img src="https://picsum.photos/50/50" alt="" />
                </div>
                <div className="reviewer">Kelly McNamara</div>
              </div>
            </div>

            <div className="review">
              <div className="review-stars">
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
                <i className="fas fa-star fa-2x"></i>
              </div>

              <div className="review-text">
                <p>
                  On time. Great job. Very kind and considerate. House looks
                  great. She was efficient and detailed. I would definitely
                  recommend her to others.
                </p>
              </div>
              <div className="review-reviewer">
                <div className="avatar">
                  <img src="https://picsum.photos/50/50" alt="" />
                </div>
                <div className="reviewer">Aisling McCool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
