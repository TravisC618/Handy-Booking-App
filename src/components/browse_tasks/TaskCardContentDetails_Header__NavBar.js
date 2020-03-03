import React from 'react';
import '../../css/browse_tasks/TaskCardContentDetails_Header__NavBar.css'
import '../../css/browse_tasks/following-button.css'



const NavBar = props => {
  return (

    <div class="step-bar-holder">
        <div class="task_details_step_bar__Container-sc-4dxcbc-0 bdybsA"><span data-ui-test="completed-task-state"
            class="task_details_step_bar__Step-sc-4dxcbc-1 bcXpha"><span color="#7db343"
                class="Text__StyledTypographyComponent-vkkwwf-0 dvmZPW">Open</span></span><span
            data-ui-test="pending-task-state" class="task_details_step_bar__Step-sc-4dxcbc-1 ioSWlZ"><span color="#bbc2dc"
                class="Text__StyledTypographyComponent-vkkwwf-0 hrKBJX">Assigned</span></span><span
            data-ui-test="pending-task-state" class="task_details_step_bar__Step-sc-4dxcbc-1 ioSWlZ"><span color="#bbc2dc"
                class="Text__StyledTypographyComponent-vkkwwf-0 hrKBJX">Completed</span></span>          
          </div>             
          <div className="following-button">
            <input  type="checkbox" />	
          </div>
    </div>

  )
}

export default NavBar;