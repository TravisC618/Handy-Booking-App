import React from 'react';
import '../css/sidebar.css'

const Sidebar = props => {
    return (
        <div id = "sidebar">
           <h4><strong>BADGES</strong></h4>
           <div class = "container id-badges">
               <h6 class = "second-heading">ID BADGES</h6>
               <h5 id = "digital-id"><i className="fas fa-id-card" style={{marginRight:'10px'}}></i>Digital ID</h5>
               <h5 id = "payment-method"><i className="fab fa-cc-mastercard" style={{marginRight:'10px'}}></i>Payment Metrod</h5>
               <h5 id = "mobile"><i className="fas fa-phone-square" style={{marginRight:'15px'}}></i>Mobile</h5>
               <h5 id = "facebook"><i className="fab fa-facebook-square" style={{marginRight:'15px'}}></i>Facebook</h5>
               <h5 id = 'linkedin'><i className="fab fa-linkedin" style={{marginRight:'15px'}}></i>Linkedin</h5>
               <button>Learn more</button>
           </div>
           <div class = "container licence-badges">
                <h6 class = "second-heading">LICENCE BADGES</h6>
               <div id = "WA-container">
                   <i id = "eletircal-icon" className="fas fa-plug"></i>
                    <div id="WA">
                        <h5><strong>WA Electrical</strong></h5>
                        <h5>Licence No.EC12680</h5>
                    </div>
               </div>
               <button>Learn more</button>
           </div>
        </div>
    )
}

export default Sidebar;