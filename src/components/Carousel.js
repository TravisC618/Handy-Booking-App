import React from 'react';
import { connect } from 'react-redux';
import { handleVideoPlay as handleVideoPlayAction } from '../redux/actions/carouselAction';
import joinUs from '../img/join_us.jpg';
import washing from '../img/washing.jpg'
import cleaner from '../img/cleaner-horizontal.jpeg';
import cleaningVideo from '../videos/cleaner.mp4'
import '../css/home/carousel.css';
import { Link } from 'react-router-dom';

const Carousel = props => {
    const { autoPlay } = props;

    return (
        // data-interval="8000" == set interval in 8s
        <div className="carousel slide" id="homepage-carousel" data-ride="carousel" data-interval="8000">
            <ol className="carousel-indicators">
                <li data-target="#homepage-carousel" data-slide-to="0" className="active" />
                <li data-target="#homepage-carousel" data-slide-to="1" />
                <li data-target="#homepage-carousel" data-slide-to="2" />
            </ol>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={washing} alt=""/>
                    <div className="mask" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Find the best cleaner in Brisbane</h4>
                            <p>Choose from 518 cleaners in Brisbane, Gold Coast</p>
                            <p>Average rate: $15.50/hr</p>
                            <Link to="/find-cleaners">
                                <button type="button" className="btn btn-outline-primary">Quick Start</button>
                            </Link>
                        </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={joinUs} alt=""/>
                    <div className="mask " />
                    <div className="carousel-caption d-none d-md-block">
                        <h4>Join us</h4>
                        <p>Register as a cleaner</p>
                    </div>
                </div>
                <div className={"carousel-item"}>
                    {/* <img className="d-block w-100" src={cleaner} alt=""/> */}
                    <video className="d-block w-100" 
                    autoPlay={autoPlay}
                    playsInline preload="auto" muted poster={cleaner}>
                        <source src={cleaningVideo}/>
                    </video>
                </div>
            </div>
            <a className="carousel-control-prev" href="#homepage-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#homepage-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
            <div className="test"></div>
        </div>

    )
}

const mapStateToProps = state => ({
    autoPlay: state.carousel.autoPlay,
});

const mapDispatchToProps = dispatch => ({
    handleVideoPlay: () => dispatch(handleVideoPlayAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);