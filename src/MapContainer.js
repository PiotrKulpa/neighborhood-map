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
    <Marker
      title={this.props.title}
      name={'Zamek'}
      position={{lat: 51.2501936, lng: 22.5705799}} />
    <Marker
      title={this.props.title}
      name={'Starówka'}
      position={{lat: 51.2481902, lng: 22.5682031}} />
    <Marker />
    <Marker
      name={'Fontanna'}
      position={{lat: 51.2481985, lng: 22.5591314}}
    />
    <Marker
      name={'Ogód Saski'}
      position={{lat: 51.2481987, lng: 22.54578}}
    />
    <Marker
      name={'Centrum Spotkania Kultur'}
      position={{lat: 51.2463997, lng: 22.5501614}}
    />
  </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE')
})(MapContainer)
