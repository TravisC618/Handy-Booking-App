import React from "react";
import "../../../css/browse_tasks/TaskCardContentDetails_Header__Share.css";
import "../../../css/browse_tasks/socialIcon.css";

const ShareContainer = props => {
  return (
    <div class="task_share__ShareContainer-j7knib-0 cgpQIf">
      <div class="task_share__TextBackground-j7knib-2 ibJUPp">
        <p
          color="#545a77"
          class="Text__StyledTypographyComponent-vkkwwf-0 zzIlN"
        >
          Share
        </p>
      </div>
      <div class="task_share__ShareButtonContainer-j7knib-1 kSwWdo">
        <div class="social">
          <a href="#" class="icon-facebook"></a>
          <a href="#" class="icon-twitter"></a>
          <a href="#" class="icon-linkedin"></a>
          <a href="#" class="icon-instagram"></a>
        </div>
      </div>
    </div>
  );
};

export default ShareContainer;
