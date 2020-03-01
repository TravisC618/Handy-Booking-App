import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import "../../css/browse_tasks/TypeButton.css";
import {TASK_URL} from '../../routes/URLMAP';
import {
    TaskContext,
  } from "../../hooks/taskReducer";

export default function ShowMapButton() {

    const taskContext = useContext(TaskContext);
    // const dispatch = taskContext.taskDispatch;

    // const handleClick = () => {
    //     dispatch({ type: SHOW_Map_State  })
    //   };

  return (
    <div>
      <Button
        color="primary"
        href={`${TASK_URL}`}
        // onClick={() => {
        //     handleClick();
        //   }}
      >
        Show Map
      </Button>
    </div>
  );
}
