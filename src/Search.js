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

  /**
   * Render view of this component.
   */
  render() {
    return (
      <div
        className = {this.state.cond ? "search-panel nav-close" : "search-panel nav-open" }
        >

        {/** Toggle button*/}
        <button
          aria-label = "Hide or show search panel"
          className = "close-panel"
          onClick = { () => this.navToggle()}
          >≡</button>

        {/** Input*/}
        <input
          aria-label = "Filter places by name"
          placeholder = "Filter places"
          onChange = {e => this.props.filterPlaces(e.target.value)}
          />
        <div>
          {this.props.places.map((el, i) =>

          /** Render button with name of places*/
          <button
            key = {i}
            data-id = {i}
            onClick = {e => this.props.markerCheck(e.target.dataset.id)} >
            {el.name}
          </button>
          )}

          {/** Additional information about the location*/}
          <p tabIndex = "0"><strong>Information about the location:</strong></p>
          {this.props.infoName ?
          <p tabIndex = "0"><strong>Name:</strong> {this.props.infoName}</p> :
          <p tabIndex = "0"><strong>Name:</strong> not available</p>
          }
          {this.props.infoAddr ?
          <p tabIndex = "0"><strong>Address:</strong> {this.props.infoAddr}</p> :
          <p tabIndex = "0"><strong>Address:</strong> not available</p>
          }
        </div>
      </div>
    );
  }

}

/** @module Search */
export default Search;
