import React from "react";
import { RangeSlider, DisabledRangeSlider } from "../../../utils/Slider";
import "../../../css/browse_tasks/RangeButton.css";

const RangeButtonContent = props => {
  return (
    <div className="container-fluid py-6">
      <h4>TO BE DONE</h4>
      <ul className="nav nav-tabs nav-justified mb-6" role="tablist">
        <li className="nav-item">
          <a
            href="#create-group-InPerson"
            className="nav-link active"
            data-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            In person
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#create-group-remotely"
            className="nav-link"
            data-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            Remotely
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#create-group-all"
            className="nav-link"
            data-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            All
          </a>
        </li>
      </ul>
      <div className="tab-content" role="tablist">
        <div
          id="create-group-InPerson"
          className="tab-pane fade active show"
          role="tabpanel"
        >
          <div className="form-group">
            <h4>SUBURB</h4>
            <input
              type="text"
              className="form-control"
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

        <div id="create-group-remotely" className="tab-pane fade" role="tabpanel">
          <div className="tab-content" role="tablist">
            <div
              id="create-group-InPerson"
              className="tab-pane fade active show"
              role="tabpanel"
            >
              <div className="form-group">
                <h4 className="DisabledFontColor">SUBURB</h4>
                <fieldset disabled>
                  <input
                    type="text"
                    className="form-control"
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
        <div id="create-group-all" className="tab-pane fade" role="tabpanel">
          <div className="tab-content" role="tablist">
            <div
              id="create-group-InPerson"
              className="tab-pane fade active show"
              role="tabpanel"
            >
              <div className="form-group">
                <h4>SUBURB</h4>
                <input
                  type="text"
                  className="form-control"
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
