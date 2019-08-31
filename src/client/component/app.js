import React from 'react';
import Templates from '../container/templates';
import Sessions from '../container/sessions';
import Tracks from '../container/tracks';

export default class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <Sessions />
        <Tracks />
        <Templates />
      </div>
    );
  }
}
