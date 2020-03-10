import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parksData from "./skateboard-parks.json";
import mapStyle from "./mapStyle";
import icon from "../../../img/icons/broom.svg";

const Map = () => {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      defaultOptions={{ styles: mapStyle }}
    >
      {parksData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => setSelectedPark(park)}
          icon={{
            url: icon,
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
          onCloseClick={() => setSelectedPark(null)}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const GoogleMapDisplay = withScriptjs(withGoogleMap(Map));

export default GoogleMapDisplay;
