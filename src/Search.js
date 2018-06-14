import React, { Component } from 'react';
import './Search.css';

/**
 * Class representing a Search component.
 * @extends React.Component
 */
class Search extends Component {

  /**
   * @property {object}    this.state - The default values for state.
   * @property {boolean}   state.cond  - The true/false of show/hide search component.
   */
  state = {
    cond: false
  }

  /**
   * Toggle search component.
   */
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
            aria-label = "Click to show more information about the location below list"
            key = {i}
            data-id = {i}
            onClick = {e => this.props.markerCheck(e.target.dataset.id)} >
            {el.name}
          </button>
          )}

          {/** Additional information about the location*/}
          <p
            tabIndex = "0"
            aria-label = "Informations about the location from foursquare.com"
            ><strong>Information about the location from Foursquare.com:</strong>
          </p>
          {this.props.infoName ?
          <p
            tabIndex = "0"
            aria-label = "Informations about location name from foursquare.com"
            ><strong>Name:</strong> {this.props.infoName}
          </p> :
          <p
            tabIndex = "0"
            aria-label = "Informations about location are not available"
            ><strong>Name:</strong> not available
          </p>
          }
          {this.props.infoAddr ?
          <p
            tabIndex = "0"
            aria-label = "Informations about location address from foursquare.com"
            ><strong>Address:</strong> {this.props.infoAddr}
          </p> :
          <p
            tabIndex = "0"
            aria-label = "Informations about location address are not available"
            ><strong>Address:</strong> not available
          </p>
          }
        </div>
      </div>
    );
  }

}

/** @module Search */
export default Search;
