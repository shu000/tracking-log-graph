import React from 'react';

export default class Tracks extends React.Component {
	render() {
		return (
			<div className='tracks'>{
        this.props.sessions.length > 0 ? sessions2DOMs(this.props.sessions) : ''
			}</div>
		);
	}
}

function sessions2DOMs(sessions) {
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
					{ session.activities.map(track2dom) }
				</div>
			</div>
		);
	});
}

function track2dom(track, i) {
  return (
		<div key={i} className='track' style={{
			display: 'inline-block',
			padding: '5px 10px',
			margin: '5px',
			backgroundColor: '#CCC'
		}}>{
      track.pageURL
		}</div>
	);
}

/*
function state2DOMs() {
		const { sessions, templates } = this.state;

		return this.props.sessions.map((session, i) => {
			return (
				<div key={i} className='session, session-container'>
					<div className='session-header'>
						<p>
							{ session['date'] + ' ' }
							{ session['device'] + ' ' }
							{ session['channel'] }
						</p>
					</div>
					<div className='session-activities, container'>
						{ session['activities'].map(track2dom) }
					</div>
				</div>
			);
		});
	}
}

function track2dom(track, i) => {
	const style = templates.reduce((style, template) => {
		if (template.isMatch && track.pageURL === template.directory) {
			return template;
		}
		if (template.isStartsWith && track.pageURL.startsWith(template.directory)) {
			return template;
		}
		if (template.isIncludes && track.pageURL.includes(template.directory)) {
					return template;
		}

		return style;
	}, {abbreviation: '', color: ''});

  return (
		<div key={i} className='track' style={{
			display: 'inline-block',
			padding: '5px 10px',
			margin: '5px',
			backgroundColor: style.color
		}} onClick={e => {
			document.getElementById('focusInfo').innerHTML = track.pageURL + '<br>' + track.pageTitle;
		}}>
			{style.abbreviation}
		</div>
	);
}
*/
