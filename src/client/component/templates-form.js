import React from 'react';

export default class TemplatesForm extends React.Component {
  render() {
    return this.props.template.styles.map((template, i) => {
      return (
  			<ul key={i} className="template-ul template-inputs">
  				<li className="template-li">
  					<input
  						name="pattern"
  						type="text"
  						defaultValue={ template.pattern }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="isMatch"
  						type="radio"
  						checked={ template.isMatch }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="isStartsWith"
  						type="radio"
  						checked={ template.isStartsWith }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="isIncludes"
  						type="radio"
  						checked={ template.isIncludes }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="title"
  						type="text"
  						defaultValue={ template.title }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="text"
  						type="text"
  						defaultValue={ template.text }
  					/>
  				</li>
  				<li className="template-li">
  					<input
  						name="backgroundColor"
  						type="text"
  						defaultValue={ template.backgroundColor }
  						style={{ backgroundColor: template.backgroundColor }}
              onChange={ e => {
              }}
  					/>
  				</li>
  			</ul>
      );
    });
  }
}
