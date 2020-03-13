import React from "react";
import { useSelector } from "react-redux";
import AlignItemsList from "../../utils/AlignItemsList";
import "../../css/browse_tasks/TaskCardContentDetails_Header__Content.css";

const HeaderContent = () => {
  const taskDetails = useSelector(state => state.task.taskDetails);
  const title = taskDetails.title;

  return (
    <div class="header-content">
      <h1 className="task-title">{title}</h1>
      <div className="posted-details">
        <AlignItemsList />
      </div>
    </div>
  );
};

export default HeaderContent;
