import React from "react";
import { RangeSlider, DisabledRangeSlider } from "../../utils/Slider";
import "../../css/browse_tasks/RangeButton.css";

const RangeButtonContent = props => {
  return (
    <div class="container-fluid py-6">
      <h4>TO BE DONE</h4>
      <ul class="nav nav-tabs nav-justified mb-6" role="tablist">
        <li class="nav-item">
          <a
            href="#create-group-InPerson"
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            In person
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#create-group-remotely"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            Remotely
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#create-group-all"
            class="nav-link"
            data-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            All
          </a>
        </li>
      </ul>
      <div class="tab-content" role="tablist">
        <div
          id="create-group-InPerson"
          class="tab-pane fade active show"
          role="tabpanel"
        >
          <div class="form-group">
            <h4>SUBURB</h4>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter a suburb"
            />
          </div>
          <div>
            <h4>DISTANCE</h4>
            <div className="RangeSlider">
              <RangeSlider />
            </div>
          </div>
        </div>

        <div id="create-group-remotely" class="tab-pane fade" role="tabpanel">
            
      <div class="tab-content" role="tablist">
        <div
          id="create-group-InPerson"
          class="tab-pane fade active show"
          role="tabpanel"
        >
            
          <div class="form-group">
            <h4 className="DisabledFontColor">SUBURB</h4>
            <fieldset disabled>
            <input
              type="text"
              class="form-control"
              id="disabledTextInput"
              placeholder="Enter a suburb"
            />
            </fieldset>
          </div>
          <div>
            <h4 className="DisabledFontColor">DISTANCE</h4>
            <div className="RangeSlider">
              <DisabledRangeSlider />
            </div>
          </div>

          </div>
          
          </div>

            
        </div>
        <div id="create-group-all" class="tab-pane fade" role="tabpanel">
        <div class="tab-content" role="tablist">
        <div
          id="create-group-InPerson"
          class="tab-pane fade active show"
          role="tabpanel"
        >
          <div class="form-group">
            <h4>SUBURB</h4>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter a suburb"
            />
          </div>
          <div>
            <h4>DISTANCE</h4>
            <div className="RangeSlider">
              <RangeSlider />
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default RangeButtonContent;
