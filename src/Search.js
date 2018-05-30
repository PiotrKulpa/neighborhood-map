import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div className="">
        <input
          placeholder="Search for places"
          onChange = {e => this.props.filterPlaces(e.target.value)}
          />
        <div>
          {this.props.places.map((el, i) =>
          <button key={i}>{el.name}</button>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
