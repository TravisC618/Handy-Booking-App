import React from 'react';
import Info from './components/details/Info';
import Reviews from './components/details/Reviews';
import Sidebar from './components/details/Siderbar';
import Header from './components/details/Header';


const Details = props => {
    return (
        <div class="row">
            <div class="col-sm-12">
                <div class='text-center'>
                    <Header />
                </div>

                <div class="row">
                    <div class="col-4">
                        <Sidebar />
                    </div>
                    <div class="col-8">
                        <Info />
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Details;