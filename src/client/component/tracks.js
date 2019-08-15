import React from 'react';

export default class Tracks extends React.Component {
  render() {
    return <p>{ JSON.stringify(this.props) }</p>
  }
}
