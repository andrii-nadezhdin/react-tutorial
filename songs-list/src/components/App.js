import React, { Component } from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <SongList />
        <SongDetails />
      </div>
    )
  }
};
