import React from "react";
import '../../css/home/hometasks.css';
import styled from 'styled-components';
import 'swiper/css/swiper.css';




const ddd = styled.div`
background: red;
width:55px;
height:55px;
`

const Card = styled.div`
font-family:"Lato", sans-serif;
background:linear-gradient(90deg, #00aaee 10%, #DD2476 90%);
position: relative;
.animate {
    transition: 0.3s cubic-bezier(0.3,0,0,1.3);
}

.card {
    background:white;
    bottom: 0;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
    height:300px;
    left:0;
    margin:auto;
    overflow:hidden;
    position:absolute;
    right:0;
    top:0;
    width:300px;
}
.card:hover {
    height: 450px;
    width:300;
}

.card_circle {
    border-radius: 50%;
    margin-left: -75px;
    margin-top: -270px;
    position: absolute;
    width: 450px;
    height:400px;
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover; 
}

.card:hover .cta_container {
    display: inline;
    
}

.card:hover .card_circle {
    background-size: cover;
    border-radius:0;
    margin-top: -130px;
}

.card:hover h2 {
    color:#fff;
}

.card:hover p {
    margin-top: 270px;
}

h2 {
    color: #3487f7;
    font-size:24px;
    font-weight: 300;
    margin-top: 150px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 9999;
}

.card:hover h2 {
    background: #3487f7;
    color: #fff;
    margin-top: 100px;
    padding: 5px;
}

.ht_p {
    color: rgba(0,0,0,0.6);
    font-size: 100%;
    font-weight:normal;
    margin: 200px 10px 10px; 
    position: absolute;
    text-align:center;
    z-index:9999;
}

.cta_container {
    display:none;
    margin-top: 380px;
    position:absolute;
    left:0;
    text-align:center;
    width:100%;
    z-index:9999;
}

.cta {
    background-clip: padding-box;
    border: 2px solid #3487f7;
    border-radius: 2px;
    color: #3487f7;
    display:inline-block;
    font-size:17px;
    font-weight:400;
    height:36px;
    letter-spacing: 0.5px;
    line-height: 36px;
    margin-bottom: 15px;
    padding:0 2rem;
    text-decoration:none;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
}

.cta:hover{
    background: #3487f7;
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px
    20px 0 rgba(0,0,0,0.19);
    color: #fff;
}
`

class HomeTasks extends React.Component {
    render() { 
        
        return ( 
            <div className="hometasks-container">
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
                           
                           <Card className="swiper-slide card_1">
                           <div className = "card animate">
                                <h2 className = "animate">
                                    headline
                                </h2>
                                <p className ="animate ht_p">
                                Easily Customize & Publish in Secs. Social media compatible. Mobile optimized. Traffic generation tools. Market leaders
                                </p>
                                <div className ="cta_container animate">
                                    <a href ="#" className = "cta">tap me</a>
                                </div>
                                <div className ="card_circle animate"></div>    
                            </div> 
                           </Card>
                           <Card className="swiper-slide card_2">
                           <div className = "card animate">
                                <h2 className = "animate">
                                    headline
                                </h2>
                                <p className ="animate ht_p">
                                Easily Customize & Publish in Secs. Social media compatible. Mobile optimized. Traffic generation tools. Market leaders
                                </p>
                                <div className ="cta_container animate">
                                    <a href ="#" className = "cta">tap me</a>
                                </div>
                                <div className ="card_circle animate"></div>    
                            </div> 
                           </Card>
                           <Card className="swiper-slide card_3">
                           <div className = "card animate" >
                                <h2 className = "animate">
                                    headline
                                </h2>
                                <p className ="animate ht_p">
                                Easily Customize & Publish in Secs. Social media compatible. Mobile optimized. Traffic generation tools. Market leaders
                                </p>
                                <div className ="cta_container animate">
                                    <a href ="#" className = "cta">tap me</a>
                                </div>
                                <div className ="card_circle animate" ></div>    
                            </div> 
                           </Card>
                           <Card className="swiper-slide card_4">
                           <div className = "card animate">
                                <h2 className = "animate">
                                    headline
                                </h2>
                                <p className ="animate ht_p">
                                Easily Customize & Publish in Secs. Social media compatible. Mobile optimized. Traffic generation tools. Market leaders
                                </p>
                                <div className ="cta_container animate">
                                    <a href ="#" className = "cta">tap me</a>
                                </div>
                                <div className ="card_circle animate" ></div>    
                            </div> 
                           </Card>
                           <Card className="swiper-slide card_5">
                           <div className = "card animate">
                                <h2 className = "animate">
                                    headline
                                </h2>
                                <p className ="animate ht_p">
                                Easily Customize & Publish in Secs. Social media compatible. Mobile optimized. Traffic generation tools. Market leaders
                                </p>
                                <div className ="cta_container animate">
                                    <a href ="#" className = "cta">tap me</a>
                                </div>
                                <div className ="card_circle animate"></div>    
                            </div> 
                           </Card>
                           <div className="swiper-pagination"></div>


                        </div>
                        <div className="task_container tab-pane fade" id="sab-id" role="tabpanel" aria-labelledby="sab-label">SAB</div>
                        <div className="task_container tab-pane fade" id="fs-id" role="tabpanel" aria-labelledby="fs-label">FS</div>
                        <div className="task_container tab-pane fade" id="hap-id" role="tabpanel" aria-labelledby="hap-label">HAP</div>
                        <div className="task_container tab-pane fade" id="sd-id" role="tabpanel" aria-labelledby="sd-label">SD</div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default HomeTasks;