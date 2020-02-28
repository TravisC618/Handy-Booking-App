import React, { Component, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import Fade from '@material-ui/core/Fade';
import {
  DetailContext
} from "../../hooks/detailReducer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class TaskMap extends Component {
  static defaultProps = {
    center: {
      lat: -27.470125,
      lng: 153.021072
    },
    zoom: 11
  };
  
  render() {
    // const { display } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '780px', width: '60%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBR10WcPnCwYSknq293F2WnrsN7zdbIenE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>    
    );
  }
}

const TaskMapDisplay = () => {

  const detailContext = useContext(DetailContext);
  const {

    isToggleOn,

  } = detailContext.detailState;


  return(

    <Fade 
    in={isToggleOn}
    mountOnEnter unmountOnExit
    style={{ transformOrigin: '0 0 0' }}
    {...(isToggleOn ? { timeout: 1000 } : {})}
  >
    <TaskMap />
    </Fade>

  )
}

export default TaskMapDisplay;