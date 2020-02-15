import React from 'react';
import TasksList from './components/browse_tasks/Tasks'




const BrowseTasks = props => {
    return (
        <div class="row">
            <div class="col-sm-12">
                <h1 class='text-center'>Header</h1>
                <div class="row">
                    <div class="col-4">
                        <TasksList />

                    </div>
                    <div class="col-8">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrowseTasks;