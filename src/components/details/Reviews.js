import React from 'react';
import '../../css/details/reviews.css';

const Reviews = props => {
    return (
      <div class="card text-center">
          <div class="card-header">
              <div class="row">
                  <div class="col">
                      <h4><strong>Reviews</strong></h4>

                  </div>

                  <div class="col-auto">
                      <div class="star-header">
                          <i class="fas fa-star fa-2x"></i>
                          <i class="fas fa-star fa-2x"></i>
                          <i class="fas fa-star fa-2x"></i>
                          <i class="fas fa-star fa-2x"></i>
                          <i class="fas fa-star fa-2x"></i>
                      </div>
                      <div class="content-header">
                          <h5>4.9 stars from 96 reviews</h5>
                          <h5>98% Completion rate</h5>
                          <h5>106 Completion tasks</h5>
                      </div>
                  </div>
                  <div class="col col-3">
                      <div class="star-rank">
                          <div class="five-star">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="total-star">88</i>

                          </div>

                          <div class="four-star">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="total-star">6</i>

                          </div>
                          <div class="three-star">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="total-star">2</i>

                          </div>
                          <div class="two-star">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="total-star">0</i>

                          </div>
                          <div class="one-star">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="total-star">0</i>

                          </div>

                      </div>
                  </div>

              </div>

          </div>
          <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">As a Tasker</a>
                  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">As a Poster</a>
              </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                  <div class="review-container">
                      <div class="review">
                          <div class="review-stars">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                          </div>

                          <div class="review-text">
                              <p>
                                  Turned up on time were helpful and professional. The guys clear about what was possible and what was not. I was impressed with their work.
                              </p>
                          </div>
                          <div class="review-reviewer">
                              <div class="avatar"><img src="https://picsum.photos/50/50" alt="" /></div>
                              <div class="reviewer">Kelly McNamara</div>
                          </div>
                      </div>

                      <div class="review">
                          <div class="review-stars">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                          </div>

                          <div class="review-text">
                              <p>
                                  On time. Great job. Very kind and considerate. House looks great. She was efficient and detailed. I would definitely recommend her to others.
                              </p>
                          </div>
                          <div class="review-reviewer">
                              <div class="avatar"><img src="https://picsum.photos/50/50" alt="" /></div>
                              <div class="reviewer">Aisling McCool</div>
                          </div>
                      </div>
                  </div>

              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                  <div class="review-container">
                      <div class="review">
                          <div class="review-stars">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                          </div>

                          <div class="review-text">
                              <p>
                                  Turned up on time were helpful and professional. The guys clear about what was possible and what was not. I was impressed with their work.
                              </p>
                          </div>
                          <div class="review-reviewer">
                              <div class="avatar"><img src="https://picsum.photos/50/50" alt="" /></div>
                              <div class="reviewer">Kelly McNamara</div>
                          </div>
                      </div>

                      <div class="review">
                          <div class="review-stars">
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                              <i class="fas fa-star fa-2x"></i>
                          </div>

                          <div class="review-text">
                              <p>
                                  On time. Great job. Very kind and considerate. House looks great. She was efficient and detailed. I would definitely recommend her to others.
                              </p>
                          </div>
                          <div class="review-reviewer">
                              <div class="avatar"><img src="https://picsum.photos/50/50" alt="" /></div>
                              <div class="reviewer">Aisling McCool</div>
                          </div>

                      </div>
                  </div>

              </div>

          </div>
      </div>


    )
}

export default Reviews;