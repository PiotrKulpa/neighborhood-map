import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <Map
        google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        initialCenter={{
              lat: 51.2467917,
              lng: 22.5637148
            }}
        zoom={15}>
        {this.props.places.map((el, i) => {
          return (
          <Marker
            key={i}
            title={el.name}
            name={'Zamek'}
            position={{lat: el.lat, lng: el.lng}}
            />
        )}
        )}
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE')
})(MapContainer)
