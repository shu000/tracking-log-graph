import React from 'react';

export default class Templates extends React.Component {
  render() {
    return (
      <div id='toggle' onClick={e => {
        this.props.onClick();
      }}>{
        this.props.toggle.isOpenForms ? <p>&gt;</p> : <p>&lt;</p>
      }</div>
    );
  }
}
