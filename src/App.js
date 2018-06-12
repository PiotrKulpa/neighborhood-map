import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import MapContainer from './MapContainer';

let foursquare = require('react-foursquare')({
  clientID: '3HABTRH4Q33WAFZLRZQEXCGWC5MIUGWZY30T2XPPDHSZQCYS',
  clientSecret: '44NQMWARLHMCRCD1BW0UNKNZBOL351XOWORZ5VE2P45EJZNA'
});

let params = {
  "ll": '',
  "query": '',
  "limit": 1
};


class App extends Component {

  basicPlaces = [
    {id: 0, name: 'Castle in Lublin', lat: 51.2504931, lng: 22.5702397, infoName: '', infoAddr: '', customIcon: false},
    {id: 1, name: 'Old Town', lat: 51.24875, lng: 22.568635, infoName: '', infoAddr: '', customIcon: false},
    {id: 2, name: 'Plac Litewski', lat: 51.2481725, lng: 22.5595155, infoName: '', infoAddr: '', customIcon: false},
    {id: 3, name: 'State Park', lat: 51.2485435, lng: 22.5481983, infoName: '', infoAddr: '', customIcon: false},
    {id: 4, name: 'Centrum Spotkania Kultur', lat: 51.2470124, lng: 22.5489064, infoName: '', infoAddr: '', customIcon: false}
  ];

  filteredPlaces = [];

  state = {
    places: this.basicPlaces,
    infoName: '',
    infoAddr: ''
  }

  filterPlaces=(filterKey) => {
    if(filterKey.length > 0) {
      this.filteredPlaces = this.basicPlaces.filter((el) => el.name.toLowerCase().includes(filterKey.toLowerCase()));
      this.setState((state) => {
        return {places: this.filteredPlaces}
    }  )


    } else {
      this.filteredPlaces = this.basicPlaces;
      this.setState({
        places: this.filteredPlaces
      })
    }
  }

  markerCheck=(id)=> {

    this.setState({
      infoName: 'loading...',
      infoAddr: 'loading...'
    })

    params['ll'] = `${this.state.places[id].lat},${this.state.places[id].lng}`;
    params['query'] = this.state.places[id].name;

    foursquare.venues.getVenues(params)
      .then(res=> {
        let infoNameTemp = '',
            infoAddrTemp = '';
        res.response.venues[0].name ? infoNameTemp = res.response.venues[0].name : infoNameTemp = '';
        res.response.venues[0].location.address ? infoAddrTemp = res.response.venues[0].location.address : infoAddrTemp = '';
        this.setState({
          infoName: infoNameTemp,
          infoAddr: infoAddrTemp
        })

      });
    
      if(this.filteredPlaces.length > 0) {
        this.filteredPlaces.forEach((el) => el.customIcon = false);
        this.filteredPlaces[id].customIcon = true;
      } else {
        this.basicPlaces.forEach((el) => el.customIcon = false);
        this.basicPlaces[id].customIcon = true;
      }


  }




  render() {
    return (
      <div className="App">
        <div className="">
          <Search
            places = {this.state.places}
            basicPlaces = {this.basicPlaces}
            filterPlaces = {this.filterPlaces}
            markerCheck = {this.markerCheck}
            infoName = {this.state.infoName}
            infoAddr = {this.state.infoAddr}
            ></Search>
        </div>
        <div style={{ height: '100vh', width: '100%' }}>
          <MapContainer
            places = {this.state.places}
            ></MapContainer>
        </div>
      </div>
    );
  }
}

export default App;
