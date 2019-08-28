import React from 'react';

export default class Tracks extends React.Component {
	render() {
		if (this.props.sessions.length === 0) return <></>

		return (
			<div
				id='tracks'
				style={ {display: 'block'} }
			>{
				sessions2DOMs(this.props.sessions, this.props.template)
			}</div>
		);
	}
}

function sessions2DOMs(sessions, template) {
	return sessions.map((session, i) => {
		return (
			<div key={i} className='session, session-container'>
				<div className='session-header'>
					<p>
						{ session.date + ' ' }
						{ session.device + ' ' }
						{ session.channel }
					</p>
				</div>
				<div className='session-activities, container'>
					{ activities2dom(session.activities, template) }
				</div>
			</div>
		);
	});
}

function activities2dom(activities, template) {
	return activities.map((activity, i) => {
		const style = getStyleFrom(template, activity.pageURL);
	  return (
			<div key={i} className='track' style={{
				display: 'inline-block',
				padding: '5px 10px',
				margin: '5px',
				backgroundColor: style.backgroundColor
			}}>{
	      style.text
			}</div>
		);
	});
}

function getStyleFrom(template, url) {
	if (url === 'arrow') {
		return { text: "→", backgroundColor: "#FFF" };
	}

	return template.styles.reduce((found, style) => {
		if (style.matching === 'match' && url === style.pattern) {
			return style;
		}
		if (style.matching === 'startsWith' && url.startsWith(style.pattern)) {
			return style;
		}
		if (style.matching === 'includes' && url.includes(style.pattern)) {
			return style;
		}

		return found;
	}, {text: "他", backgroundColor: "#CCC"});
}
