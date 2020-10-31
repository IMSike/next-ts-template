import React, { Component } from 'react'

import Icon from "@mdi/react";
import { mdiFullscreen, mdiFullscreenExit } from "@mdi/js";

interface Props {
    action:any;
    fullScreen:Boolean;
    // optionalParam?:number;
  //empty in our case
}

interface State {
  //empty in our case
}

export default class FullScreenBtnSlider extends React.Component<Props, State> {
	render() {
		return (
			<div className={this.props.fullScreen ? "slider-full-screen-btn-container-full-screen" : "slider-full-screen-btn-container"} onClick={this.props.action}>
				{this.props.fullScreen?
					<Icon path={mdiFullscreenExit} title={"Plein écran"} size={3} color="white"/>
				:
					<Icon path={mdiFullscreen} title={"Plein écran"} size={3} color="white"/>
				}
			</div>
		);
	}
}
