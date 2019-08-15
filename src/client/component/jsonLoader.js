import React from 'react';

/**
 * View droppable area
 * Raise onDrop action when dropped a json
 * @type {String}
 */
export default class JsonLoader extends React.Component {
  render() {
    return <div
      id="droparea"
      onDragEnter={ cancelEvent }
      onDragOver={ cancelEvent }
      onDrop={ readAsJson(this.props.onDrop) }
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
 * @param  {Function} callback call it with read json
 */
function readAsJson(callback) {
  return e => {
  	e.preventDefault();

  	const file = e.dataTransfer.files[0];// TODO: 複数ファイル

  	const reader = new FileReader();
  	reader.onload = e => { callback(JSON.parse(e.target.result)) };
  	reader.readAsText(file);
  };
}
