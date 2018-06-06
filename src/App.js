import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';


class App extends Component {

  basicPlaces = [
    {id: 0, name: 'Castle in Lublin', lat: 51.2504931, lng: 22.5702397, info: 'Information about Castle'},
    {id: 1, name: 'Old Town', lat: 51.24875, lng: 22.568635, info: 'Information about Old Town'},
    {id: 2, name: 'Fontain', lat: 51.2481725, lng: 22.5595155, info: 'Information about Fontain'},
    {id: 3, name: 'State Park', lat: 51.2485435, lng: 22.5481983, info: 'Information about State Park'},
    {id: 4, name: 'Centre for the Meeting of Cultures', lat: 51.2470124, lng: 22.5489064, info: 'Information about Centre for Meeting...'}
  ]

  state = {
    places: this.basicPlaces,
    infoPanel: ''
  }

  filterPlaces=(filterKey) => {
    if(filterKey.length > 0) {
      //let newPlaces = this.state.places.filter((el) => el.name.toLowerCase().includes(filterKey.toLowerCase()));
      this.setState((state) => {
        return {places: this.basicPlaces.filter((el) => el.name.toLowerCase().includes(filterKey.toLowerCase()))}
    }  )


    } else {
      this.setState({
        places: this.basicPlaces
      })
    }
  }

  markerBounce=(id)=> {

      this.setState({
        infoPanel: this.state.places[id].info
      })
  }

  render() {
    return (
      <div className="App">
        <Search
          places = {this.state.places}
          filterPlaces = {this.filterPlaces}
          markerBounce = {this.markerBounce}
          info = {this.state.infoPanel}
          ></Search>
        <div style={{ height: '100vh', width: '100%' }}>
          <MapContainer
            places = {this.state.places}
            ></MapContainer>
        </div>
      </div>
    );
  }
}

export default App;
