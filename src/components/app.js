import React, { Component } from 'react';
import SearchBar from '../containers/searchBarContainer.js'
import WeatherList from '../containers/weatherListContainer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
