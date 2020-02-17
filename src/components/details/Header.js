import React from 'react';
import cleaner from '../../img/cleaner.jpg'
import '../../css/details/header.scss';
import '../../css/details/reviews.css';

const Header = props => {
    return (
        <div classNames="header">

            <div classNames="header__head"> 

                <div classNames="header__head-bg"></div>

                <button classNames="header__head-btn">
                    Request a Quote
                </button>

            </div>


            <div classNames="header__body">
                <div classNames="header__body-avatar">
                    <p classNames="header__body-avatar--photo-wrap">
                        <a>
                            <img src={cleaner} alt="cleaner's avatar" classNames="header__body-photo"/>
                        </a>
                    </p>
                </div>

                <div classNames="header__body-info">
                    <h4 classNames="header__body-info-username">Allen M.</h4>
                    <ul className="header__body-info-userinfo">
                        <li>
                            Last online 1 hour ago
                        </li>
                        <li >
                            <i className="fas fa-map-marker-alt" />
                            Butler WA 6036, Australia
                        </li>
                        <li>
                            Member since 25th Apr 2016
                        </li>
                    </ul>
                    <a> 
                        <i className="far fa-flag" />
                        Report this member
                    </a>

                </div>

                <div classNames="header__body-reviews">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">As a Tasker</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">As a Poster</a>
                        </div>
                    </nav>

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
                </div>

            </div>

        </div>
    )
}

export default Header;