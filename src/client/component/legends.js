import React from 'react';

export default class Templates extends React.Component {
  render() {
    return (
      <div id='legends' style={ this.props.toggle.isOpenForms ? { display: 'none' } : { display: 'block' } }>
        <ul className='legends-ul'>{
          this.props.template.styles.map((style, i) => {
            return <li key={i} className='legends-li' style={{
              backgroundColor: style.backgroundColor
            }}><p>{ style.title }</p></li>
          })
        }</ul>
      </div>
    );
  }
}
