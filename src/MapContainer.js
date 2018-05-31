import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import scriptLoader from 'react-async-script-loader'

class MapContainer extends Component {

  render() {
     return (
       <Map
         google={this.props.google}
         zoom={14}
         initialCenter={{
            lat: 51.248529,
            lng: 22.5640563
          }}
          zoom={15}
         >
         {this.props.places.map((el, i) =>
           <Marker
            key = {i}
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: el.lat, lng: el.lng}} />

         )}



       </Map>
     );
   }

 }

   export default GoogleApiWrapper({
     apiKey: ('AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE')
   })(MapContainer)


  /*
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
          var myLatLng = {lat: 51.248529, lng: 22.5640563};

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {lat: 51.248529, lng: 22.5640563}
            });
            var markers = [];
            var contentString = '<div id="content">'+
           '<div id="siteNotice">'+
           '</div>'+
           '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
           '<div id="bodyContent">'+
           '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
           'sandstone rock formation in the southern part of the '+
           'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
           'south west of the nearest large town, Alice Springs; 450&#160;km '+
           '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
           'features of the Uluru - Kata Tjuta National Park. Uluru is '+
           'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
           'Aboriginal people of the area. It has many springs, waterholes, '+
           'rock caves and ancient paintings. Uluru is listed as a World '+
           'Heritage Site.</p>'+
           '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
           'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
           '(last visited June 22, 2009).</p>'+
           '</div>'+
           '</div>';

           var largeInfoWindow = new window.google.maps.InfoWindow();

            this.props.places.map((el, i) => {

              var marker = new window.google.maps.Marker({
                animation: window.google.maps.Animation.DROP,
                position: {lat: el.lat, lng: el.lng},
                map: map,
                title: el.name
            });

              markers.push(marker);

              marker.addListener('click', function() {
                populateInfoWindow(this, largeInfoWindow);
              })
            });

            function populateInfoWindow(marker, infowindow) {
              if(infowindow.marker != marker) {
                infowindow.marker = marker;
                infowindow.setContent('<div>' + marker.title + '</div>');
                infowindow.open(map, marker);
              }
            }

        }
        else{
            alert("script not loaded")
        }
    }

    render(){
        return(
            <div>
                <div id="map" style={{height: "100vh"}}></div>
            </div>
        )
    }
}

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAFIiMycwN7h_esLWJcwPRkdINM25zO4gE"]
)(MapContainer)
*/
