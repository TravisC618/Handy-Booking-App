import React from 'react';
import TaskCardContentDetailsHeader from './TaskCardContentDetails_Header';
import TaskCardContentDetailsBody from './TaskCardContentDetails_Body';
import TaskCardContentDetailsFooter from './TaskCardContentDetails_Footer';
import '../../css/browse_tasks/TaskCardContentDetails.css'




const TaskCardContentDetails = () => {

  

  return (
    <div className='TaskDetailsScroll'>
      <div className="container-fluid">
        <TaskCardContentDetailsHeader />
        <TaskCardContentDetailsBody />
        <TaskCardContentDetailsFooter />
      </div>
    </div>

  )
}

export default TaskCardContentDetails;