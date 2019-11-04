import React from 'react';
import { visibleColor } from '../util/color';

export default class TemplatesForm extends React.Component {
  render() {
    return this.props.template.styles.map((template, i) => {
      return (
  			<ul key={i} className="template-ul template-inputs">
          <form className="templatesForm">
    				<li className="template-li">
    					<input
    						name="pattern"
    						type="text"
                className="form-control"
    						defaultValue={ template.pattern }
                onChange={ e => {
                  // Should write at here because `i` is depends on here's map loop.
                  this.props.onChangeForm(i, e.target.name, e.target.value);

                  // so, what's differences between followings? what's `event`!?
                  // console.log(e);
                  // console.log(event);
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="matching"
    						type="radio"
    						defaultChecked={ template.matching === 'match' ? true : false }
                onChange={ e => {
                  // Note: it's not fired on turning to OFF, but ON.
                  this.props.onTurnOnRadio(i, 'match');
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="matching"
    						type="radio"
    						defaultChecked={ template.matching === 'startsWith' ? true : false }
                onChange={ e => {
                  // Note: it's not fired on turning to OFF, but ON.
                  this.props.onTurnOnRadio(i, 'startsWith');
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="matching"
    						type="radio"
    						defaultChecked={ template.matching === 'includes' ? true : false }
                onChange={ e => {
                  // Note: it's not fired on turning to OFF, but ON.
                  this.props.onTurnOnRadio(i, 'includes');
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="title"
    						type="text"
                className="form-control"
    						defaultValue={ template.title }
                onChange={ e => {
                  // Should write at here because `i` is depends on here's map loop.
                  this.props.onChangeForm(i, e.target.name, e.target.value);
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="text"
    						type="text"
                className="form-control"
    						defaultValue={ template.text }
                onChange={ e => {
                  // Should write at here because `i` is depends on here's map loop.
                  this.props.onChangeForm(i, e.target.name, e.target.value);
                }}
    					/>
    				</li>
    				<li className="template-li">
    					<input
    						name="backgroundColor"
    						type="text"
                className="form-control"
    						defaultValue={ template.backgroundColor }
    						style={{ backgroundColor: template.backgroundColor,
                         color: visibleColor(template.backgroundColor)}}
                onChange={ e => {
                  // Should write at here because `i` is depends on here's map loop.
                  this.props.onChangeForm(i, e.target.name, e.target.value);
                }}
    					/>
    				</li>
          </form>
  			</ul>
      );
    });
  }
}
