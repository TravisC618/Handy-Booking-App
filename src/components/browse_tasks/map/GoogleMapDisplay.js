import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parksData from "./skateboard-parks.json";
import mapStyle from "./mapStyle";
import getCoordinates from "../../../utils/getCoordinates";
import markerIcon from "../../../img/icons/marker.svg";
import LoadingSpinner from "../../../UI/LoadingSpinner.js";

const Map = () => {
  // const [position, setPosition] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const currTasks = useSelector(state => state.task.currTasks);
  const testArray = [
    "7 Landsborough Terrace, Toowong QLD",
    "71 Birley St, Spring Hill QLD"
  ];

  const isScrollBarLoading = useSelector(
    state => state.task.isScrollBarLoading
  );

  const renderMarker = currTasks => {
    if (isScrollBarLoading || currTasks.length === 0) return;
    console.log("rendering async");
    try {
      currTasks.map(async task => {
        const position = await getCoordinates(task.location);
        setMarkers(markers =>
          markers.concat(
            <Marker
              key={task._id}
              position={position}
              onClick={() => setSelectedTask(task)}
              icon={{
                url: markerIcon,
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            />
          )
        );
      });
    } catch (error) {
      // TODO error handling
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    renderMarker(currTasks);
  }, [currTasks, isScrollBarLoading]);

  return (
    <GoogleMap
      defaultZoom={11}
      // TODO fetch user current location
      defaultCenter={{ lat: -27.469512, lng: 153.024665 }}
      defaultOptions={{ styles: mapStyle }}
    >
      <>{!isScrollBarLoading && currTasks.length !== 0 && markers}</>

      {selectedTask && (
        <InfoWindow
          position={{
            lat: getCoordinates(selectedTask.location).lat,
            lng: getCoordinates(selectedTask.location).lng
          }}
          onCloseClick={() => setSelectedTask(null)}
        >
          <div>
            <h2>{selectedTask.title}</h2>
            <p>{selectedTask.details}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const GoogleMapDisplay = withScriptjs(withGoogleMap(Map));

export default GoogleMapDisplay;
