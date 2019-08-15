import React from 'react';
import JsonLoader from '../container/jsonLoader';
import Tracks from '../container/tracks';

export default class App extends React.Component {
  render() {
    return (
      <div id='app'>
        <JsonLoader />
        <Tracks />
      </div>
    );
  }
}
