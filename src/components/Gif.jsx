import * as React from 'react';

export default function Gif(props) {
	if(props.even == "False") {
		return (<div className="cs1 ce6"> <img className="miro-draggable" src={props.source} />
			</div>
			)
		} else {
		return (
			<div className="cs7 ce12">
			<img className="miro-draggable" src={props.source} />
			</div>
			)
	}
}
