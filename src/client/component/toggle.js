import React from 'react';

export default class Templates extends React.Component {
  render() {
    return (
      <div id='toggle' onClick={e => {
        this.props.onClick();
      }}>
        <p>&gt;</p>
      </div>
    );
  }
}
