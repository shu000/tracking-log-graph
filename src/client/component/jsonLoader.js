import React from 'react';

export default class JsonLoader extends React.Component {
  componentDidMount() {
		const droparea = document.getElementById("droparea");

		droparea.addEventListener("dragenter", cancelEvent);
		droparea.addEventListener("dragover", cancelEvent);
		droparea.addEventListener("drop", (e) => {
			e.preventDefault();
			// TODO: 複数ファイルドロップ時のエラー処理
			const file = e.dataTransfer.files[0];
			readAsJson(file, json => {
        console.log(json)
			});
		});
  }

  render() {
    return <div id="droparea">Drop json here!</div>
    // this.props.param
  }
}

function cancelEvent(e) {
  e.preventDefault();
	e.stopPropagation();
	return false;
};

function readAsJson(file, callback) {
	//if (file.type !== "application/json") return null;

	const reader = new FileReader();
	reader.onload = e => {
		const text = e.target.result;
		const json = JSON.parse(text);
		callback(json);
	};
	reader.readAsText(file);
}
