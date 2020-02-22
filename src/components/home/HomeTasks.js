import React from "react";
import '../../css/home/hometasks.css';


class HomeTasks extends React.Component {
    render() { 
        
        return ( 
            <header>
            <nav className="site-nav">
            <div className="home-heading">
                <h2>See what they are getting done</h2>
                <p>Do you have a hole in the wall that needs plugging? Perhaps a TV that needs mounting? Or maybe you have that perfect shade of green, but no time to paint? Get a Tasker to help.</p>
            </div>
                <ul className="underline-menu">
                <li><a href="#">Moving home</a></li>
                <li><a href="#">Starting a business</a></li>
                <li><a href="#">Fixing stuff</a></li>
                <li><a href="#">Hosting a party</a></li>
                <li><a href="#">Something different</a></li>
                </ul>
            </nav>
            </header>
            
      )
    }
};

export default HomeTasks;