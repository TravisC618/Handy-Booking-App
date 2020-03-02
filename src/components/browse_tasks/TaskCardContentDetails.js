import React, { useContext} from 'react';
import TaskCardContentDetailsHeader from './TaskCardContentDetails_Header';
import TaskCardContentDetailsBody from './TaskCardContentDetails_Body';
import TaskCardContentDetailsFooter from './TaskCardContentDetails_Footer';
import '../../css/browse_tasks/TaskCardContentDetails.css'
import { DetailContext } from "../../hooks/detailReducer";
import LoadingSpinner from "../../img/icons/LoadingSpinner.svg";



const TaskCardContentDetails = () => {

  const detailContext = useContext(DetailContext);
  const { isLoading } = detailContext.detailState;

  return (
    
    <div className='TaskDetailsScroll'>
      <div className="container-fluid">
        {isLoading && 
          <div className='loadingSpinner'>
          <img src={LoadingSpinner} alt="LoadingSpinner" />
          </div>
        }     
        {!isLoading &&
          <div>
          <TaskCardContentDetailsHeader />
          <TaskCardContentDetailsBody />
          <TaskCardContentDetailsFooter />
          </div>
        }        
      </div>
    </div>

  )
}

export default TaskCardContentDetails;