import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';


class App extends Component {

  state = {
    places: [
      {name: 'Castle in Lublin', lat: 51.2504931, lng: 22.5702397},
      {name: 'Old Town', lat: 51.24875, lng: 22.568635},
      {name: 'Fontain', lat: 51.2481725, lng: 22.5595155},
      {name: 'State Park', lat: 51.2485435, lng: 22.5481983},
      {name: 'Centre for the Meeting of Cultures', lat: 51.2470124, lng: 22.5489064}
    ]
  }

  filterPlaces=(filterKey) => {

    let newPlaces = this.state.places.filter((el) => el.name.startsWith(filterKey));
    // this.setState({
    //   places: newPlaces
    // })
    console.log(newPlaces);

  }

  render() {
    return (
      <div className="App">
        <Search
          places = {this.state.places}
          filterPlaces = {this.filterPlaces}
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
