import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';


class App extends Component {

  state = {
    title: 'Przykladowa nazwa'
  }

  render() {
    return (
      <div className="App">
        <Search></Search>
        <div style={{ height: '100vh', width: '100%' }}>
          <MapContainer
            title = {this.state.title}
            ></MapContainer>
        </div>
      </div>
    );
  }
}

export default App;
