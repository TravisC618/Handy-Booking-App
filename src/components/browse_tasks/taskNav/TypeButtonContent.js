import React from "react";
import Switches from "../../../utils/Switch";
import "../../../css/browse_tasks/PriceButton.css";

const TypeButtonContent = () => {
  return (
    <div class="container-fluid py-6">
      <div class="tab-content" role="tablist">
        <h4>AVAILABLE TASKS ONLY</h4>
        <div className="inline">
          <h4 className="description">Hide tasks that are already assigned</h4>
        </div>
        <div className="Switches">
          <Switches />
        </div>
      </div>
    </div>
  );
};

export default TypeButtonContent;
