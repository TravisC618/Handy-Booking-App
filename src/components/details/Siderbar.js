import React from 'react';
import "../../css/details/sidebar.css";
import IdImg from "../../img/icons/id.png";
import PaymentImg from "../../img/icons/credit-card.png";
import MobileImg from "../../img/icons/telephone.png";
import FacebookImg from "../../img/icons/facebook.png";
import LinkedInImg from "../../img/icons/linkedin.png";
import PowerImg from "../../img/icons/power.png";


const Sidebar = props => {
    return (
        <div className="container" id="sidebar">
            <div className="sidebar-style">
                <div className="container" id="sidebar-font">
                    <h4><strong>BADGES</strong></h4>
                    <em>ID BADGES</em>
                    <div className="sidebar-img">
                        <img src={IdImg} alt="id" />
                        <h5>Digital iD</h5>
                    </div>
                    <div className="sidebar-img">
                        <img src={PaymentImg} alt="id" />
                        <h5>Payment Method</h5>
                    </div>
                    <div className="sidebar-img">
                        <img src={MobileImg} alt="id" />
                        <h5>Mobile</h5>
                    </div>
                    <div className="sidebar-img">
                        <img src={FacebookImg} alt="id" />
                        <h5>Facebook</h5>
                    </div>
                    <div className="sidebar-img">
                        <img src={LinkedInImg} alt="id" />
                        <h5>LinkedIn</h5>
                    </div>
                    <div className="sidebar-button">
                        <button id="button"></button>
                    </div>
                    <div className="sidebar-bottom">
                        <em>LICENCE BADGES</em>
                        <div className="sidebar-img">
                            <img src={PowerImg} alt="id" />
                            <div id="sidebar-bottom-texts">
                                <h5>WA Electrical</h5>
                                <h5>Licence No.EC12680</h5>
                            </div>
                        </div>
                        <div className="sidebar-button">
                            <button id="button"></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;