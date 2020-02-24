import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faTruckMoving, faBoxOpen, faCouch, faTools, faCrop, faSeedling, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import '../../css/home/buttongroup.css';

const ButtonGroup = props => {
    return (
        <div className = "BG-container">
            <div className = "home-heading">
                <h2>What do you need done?</h2>
            </div>
            <div className = "middle">
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faBroom} />
            </a>
            <p>Home Cleaning</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faTruckMoving} />
            </a>
            <p>Full House Removal</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faBoxOpen} />
            </a>
            <p>Few Items Removal</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faCouch} />
            </a>
            <p>Furniture Resembly</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faTools} />
            </a>
            <p>Handyman</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faCrop} />
            </a>
            <p>Marketing & Design</p>    
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faSeedling} />
            </a>
            <p>Home & Gardening</p>
            </div>
            <div className = "bg-btn-container">
            <a className = 'bg-btn' href = "#">
            <FontAwesomeIcon className = 'icon' icon={faFootballBall} />
            </a>
            <p>Anything</p>
            </div>
            </div>
            

           
        </div>
    )
}

export default ButtonGroup;