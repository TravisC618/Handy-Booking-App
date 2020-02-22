import React from "react";
import '../../css/home/hometasks.css';


class Taskers extends React.Component {
    render() { 
        
        return ( 
            <header>
            <nav className="site-nav">
            <div className="home-heading">
                <h2>Meet some taskers!</h2>
                <p>Discover the story behind the people that are making the Airtasker community great, how and why they do what they do.</p>
            </div>
                <ul className="underline-menu">
                <li><a href="#">Samansa</a></li>
                <li><a href="#">Emily</a></li>
                <li><a href="#">Brendon</a></li>
                </ul>
            </nav>
            </header>
            
      )
    }
};

export default Taskers;