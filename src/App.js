import React, { Component } from 'react';
import Search from './Search';
import Map from './Map';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Search></Search>
        <Map></Map>
      </div>
    );
  }
}

export default App;
