import React from 'react';
import Info from './components/details/Info';
import Reviews from './components/details/Reviews';
import Sidebar from './components/details/Siderbar';
import Header from './components/details/Header';


const Details = props => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <Info />
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Details;
