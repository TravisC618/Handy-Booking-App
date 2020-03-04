import React from "react";
import Styled from "styled-components";
import PlayingCarouselRight from '../../modules/views/PlayingCarouselRight';
import PlayingCarouselLeft from '../../modules/views/PlayingCarouselLeft';

const Task_container = Styled.div `
background-color: #f6f8fd;
width: 100%;
display: flex;
justify-content: center;
padding: 0 20px;


.hometasks-nav {
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}


.underline-menu {
display: flex;
padding: 0;
margin: 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
list-style-type: none;
}
.underline-menu:hover li:not(:hover) a {
opacity: 0.2;
}
.underline-menu li {
position: relative;
}
.underline-menu li::after {
position: absolute;
content: "";
top: 100%;
left: 0;
width: 100%;
height: 2px;
background: #3498db;
transform: scaleX(0);
transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.underline-menu li:hover::after, .underline-menu li.active::after {
transform: scaleX(1);
}

.underline-menu .active {
color: #3498db;
font-size: larger;
font-weight: bolder;
}


.underline-menu li a {
position: relative;
display: flex;
padding: 30px 25px 30px 25px;
text-decoration: none;
color: black;
transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.task_container {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin-top: 20px;
  padding: 0;
  height: 500px;
  width:100%;
}
`

class ProductTasks extends React.Component {
    render() {
        return (
            <Task_container>
                <nav className="hometasks-nav">
                    <div className="home-heading">
                        <h2>See what they are getting done</h2>
                    </div>
                    <ul className="nav underline-menu" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="mh-label" data-toggle="tab" href="#mh-id" role="tab" aria-controls="mh-ac" aria-selected="true">Moving home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sab-label" data-toggle="tab" href="#sab-id" role="tab" aria-controls="sab-ac" aria-selected="false">Starting a business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="fs-label" data-toggle="tab" href="#fs-id" role="tab" aria-controls="fs-ac" aria-selected="false">Fixing stuff</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="hap-label" data-toggle="tab" href="#hap-id" role="tab" aria-controls="hap-ac" aria-selected="false">Hosting a party</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sd-label" data-toggle="tab" href="#sd-id" role="tab" aria-controls="sd-ac" aria-selected="false">Something different</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="task_container tab-pane fade show active" id="mh-id" role="tabpanel" aria-labelledby="mh-label">
                           <PlayingCarouselLeft></PlayingCarouselLeft>
                           <PlayingCarouselRight></PlayingCarouselRight>
                        </div>
                        <div className="task_container tab-pane fade" id="sab-id" role="tabpanel" aria-labelledby="sab-label"><PlayingCarouselLeft></PlayingCarouselLeft>
                           <PlayingCarouselRight></PlayingCarouselRight></div>
                        <div className="task_container tab-pane fade" id="fs-id" role="tabpanel" aria-labelledby="fs-label"><PlayingCarouselLeft></PlayingCarouselLeft>
                           <PlayingCarouselRight></PlayingCarouselRight></div>
                        <div className="task_container tab-pane fade" id="hap-id" role="tabpanel" aria-labelledby="hap-label"><PlayingCarouselLeft></PlayingCarouselLeft>
                           <PlayingCarouselRight></PlayingCarouselRight></div>
                        <div className="task_container tab-pane fade" id="sd-id" role="tabpanel" aria-labelledby="sd-label"><PlayingCarouselLeft></PlayingCarouselLeft>
                           <PlayingCarouselRight></PlayingCarouselRight></div>
                    </div>
                </nav>
            </Task_container>
        )
    }
}

export default ProductTasks;