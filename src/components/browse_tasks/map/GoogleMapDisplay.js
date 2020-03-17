import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyle from "./mapStyle";
import getCoordinates from "../../../utils/getCoordinates";
import InfoCard from "./InfoCard";
import markerIcon from "../../../img/icons/marker.svg";
import LoadingSpinner from "../../../UI/LoadingSpinner.js";

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const currTasks = useSelector(state => state.task.currTasks);

  const isScrollBarLoading = useSelector(
    state => state.task.isScrollBarLoading
  );

  const renderMarker = currTasks => {
    // if (isScrollBarLoading || currTasks.length === 0) return;
    try {
      currTasks.map(async task => {
        const position = await getCoordinates(task.location);
        setMarkers(markers =>
          markers.concat(
            <Marker
              key={task._id}
              position={position}
              onClick={() => {
                setSelectedTask({ ...task, position }); // selectedTask: specified task
              }}
              icon={{
                url: markerIcon,
                scaledSize: new window.google.maps.Size(40, 40)
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

  const renderInfoWindow = () => {
    console.log({ selectedTask });
    return (
      <InfoWindow
        position={{
          lat: selectedTask.position.lat,
          lng: selectedTask.position.lng
        }}
        onCloseClick={() => setSelectedTask(null)}
      >
        <InfoCard
          title={selectedTask.title}
          details={selectedTask.details}
          budget={selectedTask.budget}
          name={selectedTask.name}
        />
      </InfoWindow>
    );
  };

  useEffect(() => {
    if (isScrollBarLoading || currTasks.length === 0) return;
    renderMarker(currTasks);
  }, [isScrollBarLoading]);

  return (
    <GoogleMap
      defaultZoom={12}
      // TODO fetch user current location
      defaultCenter={{ lat: -27.469512, lng: 153.024665 }}
      defaultOptions={{ styles: mapStyle }}
    >
      <>{!isScrollBarLoading && currTasks.length !== 0 && markers}</>
      {selectedTask && renderInfoWindow()}
    </GoogleMap>
  );
};

const GoogleMapDisplay = withScriptjs(withGoogleMap(Map));

export default GoogleMapDisplay;
