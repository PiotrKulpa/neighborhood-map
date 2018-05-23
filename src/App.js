import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';
import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search></Search>
        <Map></Map>
      </div>
    );
  }
}

export default App;
