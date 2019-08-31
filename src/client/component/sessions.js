import React from 'react';

/**
 * View droppable area
 * Raise onDrop action when dropped a json
 * @type {String}
 */
export default class Sessions extends React.Component {
  render() {
    if (this.props.sessions.length > 0) return <></>

    return <div
      id="droparea"
      onDragEnter={ cancelEvent }
      onDragOver={ cancelEvent }
      onDrop={ e => {
      	e.preventDefault();
        const file = e.dataTransfer.files[0];// TODO: 複数ファイル
        readAsJson(file, this.props.onDrop);
      }}
    >
      <p>Drop json here!</p>
    </div>
  }
}

/**
 * Cencel browser's default event handler
 * @param  {Object}  e event object provided by browser
 * @return {Boolean}   false, for canceling event
 */
function cancelEvent(e) {
  e.preventDefault();
	e.stopPropagation();
	return false;
}

/**
 * Read dropped file as json, and pass json to callback function
 * @param  {Object}   file file will be read
 * @param  {Function} callback function called with read json
 */
function readAsJson(file, callback) {
	const reader = new FileReader();
	reader.onload = e => { callback(JSON.parse(e.target.result)) };
	reader.readAsText(file);
}
