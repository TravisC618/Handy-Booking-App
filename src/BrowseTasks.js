import React, { Component } from 'react';
import TaskNav from './components/browse_tasks/TaskNav'
import VirtualizedList from './utils/Table'
import TaskMap from './components/browse_tasks/TaskMap'
import TaskCardContentDetails from './components/browse_tasks/TaskCardContentDetails'
import './css/browse_tasks/task-list.css'




class BrowseTasks extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            hideMap: false,
        };
  
        this.handleChange = this.handleChange.bind(this);
  
    }
    
    handleChange(event) {
        this.setState({hideMap: true});
    }

    render() {
        const showMap = this.state.hideMap ? {display: 'none'} : {};
   
        return (
            <div className="browseContent" >
            <div class="row">
            <TaskNav />
                <div class="col-12">
                    <div class="col">       
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <div className="infinite-scroll-list" onClick={this.handleChange}>
                            <   VirtualizedList />
                            </div>              
                        </div>
                        <div class="col-8">
                            <div className='hideMapContent' style = {showMap}>
                            < TaskMap />
                            </div>
                            <div className='hideDetailsContent' style = {this.state.hideMap ? {} : {display: 'none'}}>
                            < TaskCardContentDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )

    }

};

export default BrowseTasks;