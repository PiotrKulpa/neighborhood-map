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
          <button
            key={i}
            data-id={i}
            onClick = {e => this.props.markerBounce(e.target.dataset.id)} >
            {el.name}
          </button>
          )}
          <p>{this.props.info}</p>
        </div>
      </div>
    );
  }
}

export default Search;
