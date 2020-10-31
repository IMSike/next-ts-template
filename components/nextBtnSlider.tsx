import React, { Component } from 'react'


interface Props {
    // action:any;
  //empty in our case
}

interface State {
  //empty in our case
}

export default class Test extends React.Component<Props, State> {
	render() {
		return (
			<div className="slider-next-btn-container" onClick={this.props.action}>
				<p>{">"}</p>
			</div>
		);
	}
}
