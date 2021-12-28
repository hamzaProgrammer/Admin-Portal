import React ,  { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    marginTop: '00px',
    maxWidth: '1150px',
    backgroundColor: '#F7F7F8',
    paddingLeft: '20px',
    maxHeight: '500px',
    overFlowX: 'hidden',
    
};

export class MapContainer extends Component {
  render() {
    return (
    <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={
          {
            lat: 28.704060,
            lng: 77.102493
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDUWCD_nw23PrqNZu7O6HdxsP05D_8F820"
})(MapContainer)