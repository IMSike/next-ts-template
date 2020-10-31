import React, { Component } from 'react'


interface Props {
    fullScreen:Boolean;
    // action:any;
  //empty in our case
}

interface State {
  //empty in our case
}

export default class Test extends React.Component<Props, State> {
	render() {
		return (
			<div className={this.props.fullScreen ? "slider-next-btn-container-full-screen" : "slider-next-btn-container"} onClick={this.props.action}>
				<p>{">"}</p>
			</div>
		);
	}
}
