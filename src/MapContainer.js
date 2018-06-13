import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

/**
 * Class representing a Neighborhood Map main component.
 * @extends React.Component
 */
class MapContainer extends Component {

  /**
   * @property {object}     this.state              - The default values for state.
   * @property {boolean}   state.showingInfoWindow  - The true/false of show info window.
   * @property {object}   state.activeMarker        - The default value of active marker.
   * @property {object}  state.selectedPlace        - The default value of selected place.
   */
  state = {
     showingInfoWindow: false,
     activeMarker: {},
     selectedPlace: {},
   }

   /**
    * Update info window when marker is clicked.
    */
   onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  /**
   * Render view of this component.
   */
  render() {
     return (

       /** Render map*/
       <Map google={this.props.google}
            zoom={13}
            initialCenter={{
              lat: 51.248529,
              lng: 22.5640563
            }}>

         {this.props.places.map((el, i) =>

            /** Render markers on map*/
            <Marker onClick={this.onMarkerClick}
                     key = {i}
                     title={el.name}
                     name={el.name}
                     position={{lat: el.lat, lng: el.lng}}

                     /** If marker is clicked render custom icon otherwise render default icon*/
                     icon={el.customIcon === true ? {
                          url: `${require("./icons/custom_icon.png")}`,
                          scaledSize: new window.google.maps.Size(32,32)
                          } :
                          {
                             url: `${require("./icons/default_icon.png")}`,
                             scaledSize: new window.google.maps.Size(32,32)
                          }
                      }
            />
         )}

          {/** Render Info Window*/}
           <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              {/** Show name and position of marker in Info Window*/}
              <div>
                <h3>{this.state.selectedPlace.name ? this.state.selectedPlace.name : "not available"}</h3>
                <h4>Lat: {this.state.selectedPlace.position ? this.state.selectedPlace.position.lat : "not available"}</h4>
                <h4>Lng: {this.state.selectedPlace.position ? this.state.selectedPlace.position.lng : "not available"}</h4>
              </div>
          </InfoWindow>

       </Map>
     );
   }

 }

/** @module MapContainer */
export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE',
    language: props.language,
    google: props.google
  }
))(MapContainer)
