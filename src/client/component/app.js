import React from 'react';
import Customers from '../container/customers';
import Templates from '../container/templates';
import Sessions from '../container/sessions';
import Tracks from '../container/tracks';

export default class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <div id='left-pane'>
          <Sessions />
          <Tracks />
        </div>
        <div id='right-pane'>
          <Customers />
          <Templates />
        </div>
      </div>
    );
  }
}
