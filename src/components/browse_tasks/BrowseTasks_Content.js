import React from "react";
import TaskTable from "./TaskTable";
import TaskCardContentDetails from "./task_card_content/TaskCardContentDetails";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import { TASK_URL } from "../../routes/URLMAP";
import GoogleMapDisplay from "./map/GoogleMapDisplay";

const Content = props => {
  const {
    location: { pathname: currentPath }
  } = props;

  return (
    <div className="row">
      <div className="col-4 scroll-bar">
        <div className="infinite-scroll-list">
          <TaskTable />
        </div>
      </div>
      <div className="col-8 map-display">
        {currentPath === `${TASK_URL}` && (
          <GoogleMapDisplay
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCuBhdFf7s-ipOzlY28rYbDMg2LeMqNsks"
            }
          />
        )}
        <Route
          path={`${TASK_URL}/:taskId`}
          component={TaskCardContentDetails}
        />
      </div>
    </div>
  );
};

export const BrowseTasksContent = withRouter(Content);
