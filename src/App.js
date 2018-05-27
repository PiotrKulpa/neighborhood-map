import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';


class App extends Component {

  state = {
    places: [
      {name: 'Castle in Lublin', lat: 51.2501936, lng: 22.5705799},
      {name: 'Old Town', lat: 51.2501936, lng: 22.5705799},
      {name: 'Fontain', lat: 51.2501936, lng: 22.5705799},
      {name: 'State Park', lat: 51.2501936, lng: 22.5705799},
      {name: 'Centre for the Meeting of Cultures', lat: 51.2501936, lng: 22.5705799}
    ],
    title: 'Przykladowa nazwa'
  }

  render() {
    return (
      <div className="App">
        <Search></Search>
        <div style={{ height: '100vh', width: '100%' }}>
          <MapContainer
            title = {this.state.title}
            places = {this.state.places}
            ></MapContainer>
        </div>
      </div>
    );
  }
}

export default App;
