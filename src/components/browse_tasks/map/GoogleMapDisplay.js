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
  const [selectedTask, setSelectedTask] = useState(null);
  const [position, setPosition] = useState([]);
  const currTasks = useSelector(state => state.task.currTasks);
  const testArray = [
    "7 Landsborough Terrace, Toowong QLD",
    "71 Birley St, Spring Hill QLD"
  ];

  const isScrollBarLoading = useSelector(
    state => state.task.isScrollBarLoading
  );

  const loadPosition = task => {
    // if (isScrollBarLoading || currTasks.length === 0) return;
    // currTasks.map(task => {
    console.log("rendering async");
    // setPosition(position => position.concat({ lat, lng }));
    getCoordinates(task.location).then(response => {
      // debugger;
      const { lat, lng } = response;
      return (
        <Marker
          key={task._id}
          position={{ lat, lng }}
          onClick={() => setSelectedTask(task)}
          icon={{
            url: markerIcon,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      );
    });
    // });
  };

  // useEffect(() => {
  //   loadPosition(currTasks);
  // }, [currTasks]);

  const renderMarker = () => {
    return (
      <>
        <Marker
          key={1} //TODO 调整为task._id
          position={{ lat: -27.467328, lng: 153.022769 }}
          // onClick={() => setSelectedTask(task)}
          icon={{
            url: markerIcon,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
        <Marker
          key={2} //TODO 调整为task._id
          position={{ lat: -27.466428, lng: 153.029569 }}
          // onClick={() => setSelectedTask(task)}
          icon={{
            url: markerIcon,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      </>
    );
  };

  return (
    <GoogleMap
      defaultZoom={11}
      // TODO fetch user current location
      defaultCenter={{ lat: -27.469512, lng: 153.024665 }}
      defaultOptions={{ styles: mapStyle }}
    >
      {/* {loadPosition(currTasks)} */}
      {/* {renderMarker()} */}
      <>
        {!isScrollBarLoading &&
          currTasks.length !== 0 &&
          currTasks.map(task => loadPosition(task))}
      </>

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
