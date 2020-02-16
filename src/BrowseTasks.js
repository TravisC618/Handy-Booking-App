import React from 'react';
import InfiniteScroll from './components/browse_tasks/Tasks'
import Header from './components/browse_tasks/Header'




const BrowseTasks = props => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="col">
                    <Header />
                </div>
                <div class="row">
                    <div class="col-4">
                        <InfiniteScroll />

                    </div>
                    <div class="col-8">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrowseTasks;