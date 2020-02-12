import React from 'react';
import '../css/header.css';
import cleaner from '../img/cleaner.jpg'


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
                    <div>As a Tasker     As a Poster
                        <p>409 star from 96 reviews</p>
                        <p>95% Completion rate</p>
                        <p>106 Completed tasks</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;