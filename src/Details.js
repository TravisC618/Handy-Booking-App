import React from 'react';
import Info from './components/Info';
import Sidebar from './components/Sidebar'

const Details = props => {
    return (
        <div className="details">
            <Info />
            <Sidebar />
        </div>
    )
};

export default Details;