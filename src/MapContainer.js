import React, { Component } from 'react';
import './App.css';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import scriptLoader from 'react-async-script-loader'

class MapContainer extends Component{
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
          var myLatLng = {lat: 51.248529, lng: 22.5640563};

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: {lat: 51.248529, lng: 22.5640563}
            });

            this.props.places.map((el, i) => {
              var marker = new window.google.maps.Marker({
              animation: window.google.maps.Animation.DROP,
              position: {lat: el.lat, lng: el.lng},
              map: map,
              title: el.name
            });
            })

        }
        else{
            alert("script not loaded")
        }
    }

    render(){
        return(
            <div>
                <div id="map" style={{height: "600px"}}></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE"]
)(MapContainer)
