import React, { useContext } from "react";
import { DetailContext } from "../../hooks/detailReducer";
import AlignItemsList from "../../utils/AlignItemsList";
import "../../css/browse_tasks/TaskCardContentDetails_Header__Content.css";

const HeaderContent = props => {
  const detailContext = useContext(DetailContext);
  const { taskDetails } = detailContext.detailState;
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
