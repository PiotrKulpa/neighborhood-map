import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class MapContainer extends Component {

  state = {
     showingInfoWindow: false,
     activeMarker: {},
     selectedPlace: {},
   };

   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
     return (
       <Map google={this.props.google}
            zoom={13}
           initialCenter={{
              lat: 51.248529,
              lng: 22.5640563
            }}>

         {this.props.places.map((el, i) =>

            <Marker onClick={this.onMarkerClick}
                     key = {i}
                     title={el.name}
                     name={el.name}
                     position={{lat: el.lat, lng: el.lng}}
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

         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>

       </Map>
     );
   }

 }

   // export default GoogleApiWrapper({
   //   apiKey: ('AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE')
   // })(MapContainer)

   export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE',
    language: props.language,
    google: props.google
  }
))(MapContainer)
