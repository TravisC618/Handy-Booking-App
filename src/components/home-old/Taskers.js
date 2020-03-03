import React from "react";
import '../../css/home/hometasks.css';
import '../../css/home/taskers.css';



class Taskers extends React.Component {
    render() { 
        
        return ( 
            <div className = "taskers-container">
                <div className="home-heading">
                    <h2>Meet some Taskers!</h2>
                    <p>Discover the story behind the people that are making the Byedust community great, how and why they do what they do.</p>
                </div>
                <ul className="nav underline-menu" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="samansa-label" data-toggle="tab" href="#samansa" role="tab" aria-controls="home" aria-selected="true">Samansa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="jerry-label" data-toggle="tab" href="#jerry" role="tab" aria-controls="profile" aria-selected="false">Jerry</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="michael-label" data-toggle="tab" href="#michael" role="tab" aria-controls="contact" aria-selected="false">Michael</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tasker-container tab-pane fade show active" id="samansa" role="tabpanel" aria-labelledby="samansa-label">samansasasdsdsd</div>
                    <div className="tasker-container tab-pane fade" id="jerry" role="tabpanel" aria-labelledby="jerry-label">jerryyyy</div>
                    <div className="tasker-container tab-pane fade" id="michael" role="tabpanel" aria-labelledby="michael-label">michaellllll</div>
                </div>
            </div>
            
      )
    }
};

export default Taskers;