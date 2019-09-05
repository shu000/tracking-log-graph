import React from 'react';
import Sessions from '../container/sessions';
import Tracks from '../container/tracks';
import Toggle from '../container/toggle';
import Customers from '../container/customers';
import Templates from '../container/templates';
import Legends from '../container/legends';

export default class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <div id='left-pane' style={
          this.props.toggle.isOpenForms ? { width: '50%' } : { width: '85%' }
        }>
          <Sessions />
          <Tracks />
        </div>
        <div id='right-pane' style={
          this.props.toggle.isOpenForms ? { width: '50%' } : { width: '15%' }
        }>
          <Toggle />
          <div id='right-contents'>{ (() => {
            if (this.props.toggle.isOpenForms) { return (
              <>
                <Customers />
                <Templates />
              </>
            )} else {
              return <Legends />
            }
          })()}</div>
        </div>
      </div>
    );
  }
}
