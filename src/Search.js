import React, { Component } from 'react';

import './Search.css';

class Search extends Component {

  state = {
    cond: false
  }

  navToggle() {
    this.setState({
     cond: !this.state.cond
   });
  }

  render() {
    return (
      <div
        className={this.state.cond ? "search-panel nav-close" : "search-panel nav-open" }
        >
        <button
          className = "close-panel"
          onClick = { () => this.navToggle()}
          >≡</button>
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
          <p><strong>Information about the location:</strong></p>
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
