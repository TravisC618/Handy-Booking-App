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
                
                <div class="menu-folder expanded">
                    <div class="menu-folder-items showing">
                        <a class="button" href="/account/dashboard/">Dashboard</a>
                        <a class="button" href="/account/payment-history/">Payments history</a>
                        <a class="button">Notifications<span class="number notifications-count off">0</span></a>
                    </div>
                </div>
                <div class="menu-folder">
                    <div class="menu-folder-control showing">
                        <a class="button">Settings</a>                     
                    </div>
                    <div class="menu-folder-items">
                        <a class="button" href="/account/profile/">Account</a>
                        <a class="button" href="/account/skills/">Skills</a>
                        <a class="button" href="/account/badges/">Badges</a>
                        <a class="button" href="/account/alerts/">Task Alerts</a>
                        <a class="button" href="/account/notification-settings/">Notification Settings</a>
                        <a class="button" href="/account/mobile/">Mobile</a>
                        <a class="button" href="/account/portfolio/">Portfolio</a>
                        <a class="button" href="/account/password/">Password</a>
                    </div>
                </div>
                            
           
            </div>

        </div>
    )
}

export default Menu;