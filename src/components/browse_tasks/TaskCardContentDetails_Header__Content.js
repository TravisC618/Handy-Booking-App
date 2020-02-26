import React from 'react';
import AlignItemsList from '../../utils/AlignItemsList'
import '../../css/browse_tasks/TaskCardContentDetails_Header__Content.css'



const HeaderContent = props => {
  return (

    <div class="header-content">
        <h1 className="task-title"> This is a long task title that can go to the second line</h1>
        <div className="posted-details">
          <AlignItemsList />
        </div>
    </div>

  )
}

export default HeaderContent;