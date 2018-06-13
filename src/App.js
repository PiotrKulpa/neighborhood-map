import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';

// react-foursquare client ID and client Secret parameters
let foursquare = require('react-foursquare')({
  clientID: '3HABTRH4Q33WAFZLRZQEXCGWC5MIUGWZY30T2XPPDHSZQCYS',
  clientSecret: '44NQMWARLHMCRCD1BW0UNKNZBOL351XOWORZ5VE2P45EJZNA'
});

// react-foursquare basic parameters
let params = {
  "ll": '',
  "query": '',
  "limit": 1
};

/**
 * Class representing a Neighborhood Map main component.
 * @extends React.Component
 */
class App extends Component {

  /**
   * Default places.
   */
  basicPlaces = [
    {id: 0, name: 'Castle in Lublin', lat: 51.2504931, lng: 22.5702397, customIcon: false},
    {id: 1, name: 'Old Town', lat: 51.24875, lng: 22.568635, customIcon: false},
    {id: 2, name: 'Plac Litewski', lat: 51.2481725, lng: 22.5595155, customIcon: false},
    {id: 3, name: 'State Park', lat: 51.2485435, lng: 22.5481983, customIcon: false},
    {id: 4, name: 'Centrum Spotkania Kultur', lat: 51.2470124, lng: 22.5489064, customIcon: false}
  ]

  /**
   * Places stored here after using search filter.
   */
  filteredPlaces = []

  /**
     * @property {object}  this.state           - The default values for state.
     * @property {array}   state.places         - The array of default places.
     * @property {string}   state.infoName      - The default value of name in Information about the location.
     * @property {string}  state.infoAddr       - The default value of address in Information about the location.
     */
  state = {
    places: this.basicPlaces,
    infoName: '',
    infoAddr: ''
  }

  /**
   * Filter places after using search filter
   */
  filterPlaces=(filterKey) => {

    // If input is not empty
    if(filterKey.length > 0) {

      // Filter this.basicPlaces and put results to this.filteredPlaces then update state
      this.filteredPlaces = this.basicPlaces.filter((el) => el.name.toLowerCase().includes(filterKey.toLowerCase()));
      this.setState((state) => {
        return {places: this.filteredPlaces};
      });
    } else {

      // Use basic places instead
      this.filteredPlaces = this.basicPlaces;
      this.setState({
        places: this.filteredPlaces
      });
    }
  }

  /**
   * Change marker when clicked button in search panel
   */
  markerCheck=(id)=> {

    // name and address are loading
    this.setState({
      infoName: 'loading...',
      infoAddr: 'loading...'
    });

    // set react-foursquare basic parameters
    params['ll'] = `${this.state.places[id].lat},${this.state.places[id].lng}`;
    params['query'] = this.state.places[id].name;

    // fetch data from Foursquare API
    foursquare.venues.getVenues(params)
      .then(res => {

        // name and address temporary strings
        let infoNameTemp = '',
            infoAddrTemp = '';

        // name and address are updated
        res.response.venues[0].name ? infoNameTemp = res.response.venues[0].name : infoNameTemp = '';
        res.response.venues[0].location.address ? infoAddrTemp = res.response.venues[0].location.address : infoAddrTemp = '';

        // name and address are are updated by state in React way
        this.setState({
          infoName: infoNameTemp,
          infoAddr: infoAddrTemp
        });

      });

      // if this.filteredPlaces is empty use this.basicPlaces array of places
      if(this.filteredPlaces.length > 0) {
        this.filteredPlaces.forEach((el) => el.customIcon = false);
        this.filteredPlaces[id].customIcon = true;
      } else {
        this.basicPlaces.forEach((el) => el.customIcon = false);
        this.basicPlaces[id].customIcon = true;
      }

  }

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div className="App">
        <div>
          <Search
            places = {this.state.places}
            basicPlaces = {this.basicPlaces}
            filterPlaces = {this.filterPlaces}
            markerCheck = {this.markerCheck}
            infoName = {this.state.infoName}
            infoAddr = {this.state.infoAddr}
            ></Search>
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
          <MapContainer
            places = {this.state.places}
            ></MapContainer>
        </div>
      </div>
    );
  }

}

/** @module App */
export default App;
