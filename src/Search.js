import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div className="">
        <input
          placeholder="Filter places"
          onChange = {e => this.props.filterPlaces(e.target.value)}
          />
        <div>
          {this.props.places.map((el, i) =>
          <button
            key={i}
            data-id={i}
            onClick = {e => this.props.markerCheck(e.target.dataset.id)} >
            {el.name}
          </button>
          )}
          {this.props.infoName ?
          <p><strong>Name:</strong> {this.props.infoName}</p> :
          <p><strong>Name:</strong> not available</p>
          }
          {this.props.infoAddr ?
          <p><strong>Address:</strong> {this.props.infoAddr}</p> :
          <p><strong>Address:</strong> not available</p>
          }
        </div>
      </div>
    );
  }
}

export default Search;
