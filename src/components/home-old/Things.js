import React from "react";
import '../../css/home/things.css';

class Things extends React.Component {
    render() {
        return (
            <div className = "things-container">
                <div className="home-heading">
                    <h2>Things you might also want to know</h2>
                    <p>Whether you’re getting work done or doing tasks on Airtasker, know that we’ve got your back every step of the way.</p>
                </div>
                <main className="page-content">
                <div className="things-card">
                <div className="content">
                <h2 className="title">Secure Payments</h2>
                <p className="copy">We hold task payments secure with our PCI-DSS compliant Airtasker Pay – so tasks can be completed knowing payment is there when you're done.</p>
                
                </div>
                </div>
                <div className="things-card">
                <div className="content">
                <h2 className="title">Top rated insurance</h2>
                <p className="copy">Insurance is there to ease any worries - making sure the Tasker has liability insurance from CGU while performing most task activities. T&C's apply.</p>
                
                </div>
                </div>
                <div className="things-card">
                <div className="content">
                <h2 className="title">Verified badges</h2>
                <p className="copy">Badges give members a bit more verified info when deciding who to work with on a task. Each badge has certain requirements that must be met and verified before they’re shown on the member's profile. </p>

                </div>
                </div>
                <div className="things-card">
                <div className="content">
                <h2 className="title">Here if you need us</h2>
                <p className="copy">Our comprehensive Help Centre and dedicated Airtasker Support are on hand 24/7 to help with any questions, queries or issues you might have.</p>
                
                </div>
                </div>
                </main> 
            </div>
            
        )
    }
}

export default Things;