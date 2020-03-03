import React from "react";
import "../../css/home/homeposter.css"


class HomePoster extends React.Component {
    render() { 
        return ( 
            <div className="grid-container">
            <div className="search" className="slide-down">
            </div>
            <div className="banner-text">
            <h1><span className="reveal">Exhilarating<br/></span> <span className="reveal-2">Cars.</span></h1>
            </div>
            <div className="blurred-container">
            <div className="blurred-banner">
            <h4>Info.</h4>
            <h2>dates <br/>in the <br /> Brisbane.</h2>
            <p className="orange-text">Cars.</p>
            <p>We only sell limited production, limited edition and special edition cars.</p>	
            </div>
            </div>
            </div>
        )
    }
};

export default HomePoster;