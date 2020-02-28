import React from 'react';
import '../../css/account/menu.css';

const Menu = props => {
    return (   
        <div className="menu">
           <div className="menu__user">
               <div className="menu__user-avatar">

               </div>
               <div className="menu__user-name">
                   User Name
               </div>

           </div>

            <div className="menu__list">
                
                <div className="menu-folder expanded">
                    <div className="menu-folder-items showing">
                        <a className="button" href="/account/dashboard/">Dashboard</a>
                        <a className="button" href="/account/payment-history/">Payments history</a>
                        <a className="button">Notifications<span className="number notifications-count off">0</span></a>
                    </div>
                </div>
                <div className="menu-folder">
                    <div className="menu-folder-control showing">
                        <a className="button">Settings</a>                     
                    </div>
                    <div className="menu-folder-items">
                        <a className="button" href="/account/profile/">Account</a>
                        <a className="button" href="/account/skills/">Skills</a>
                        <a className="button" href="/account/badges/">Badges</a>
                        <a className="button" href="/account/alerts/">Task Alerts</a>
                        <a className="button" href="/account/notification-settings/">Notification Settings</a>
                        <a className="button" href="/account/mobile/">Mobile</a>
                        <a className="button" href="/account/portfolio/">Portfolio</a>
                        <a className="button" href="/account/password/">Password</a>
                    </div>
                </div>
                            
           
            </div>

        </div>
    )
}

export default Menu;