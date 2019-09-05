import React from 'react';
import Sessions from '../container/sessions';
import Tracks from '../container/tracks';
import Toggle from '../container/toggle';
import Customers from '../container/customers';
import Templates from '../container/templates';

export default class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <div id='left-pane'>
          <Sessions />
          <Tracks />
        </div>
        <div id='right-pane'>
          <Toggle />
          <div id='right-contents'>
            <Customers />
            <Templates />
          </div>
        </div>
      </div>
    );
  }
}
