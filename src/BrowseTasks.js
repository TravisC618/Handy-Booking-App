import React from 'react';
import TaskNav from './components/browse_tasks/TaskNav'
import VirtualizedList from './utils/Table'
import TaskMap from './components/browse_tasks/TaskMap'
import './css/browse_tasks/task-list.css'




const BrowseTasks = props => {
    return (
        <div className="browseContent">
        <div class="row">
            <div class="col-12">
                <div class="col">
                    <TaskNav />
                </div>
                <div class="row">
                    <div class="col-4">
                        <div className="infinite-scroll-list">
                        <   VirtualizedList />
                        </div>              
                    </div>
                    <div class="col-8">
                        < TaskMap />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default BrowseTasks;