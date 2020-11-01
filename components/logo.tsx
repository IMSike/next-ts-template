import React, { Component, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Icon from "@mdi/react";
import { mdiEyeOff, mdiEye } from "@mdi/js";

interface IProps {
    visible: Boolean;
    action: any;
}

const renderLogo = (props: IProps) => {
	const size = useWindowSize();
	if (size.width <= 1280) {
		return (
			<div className={styles.containerBufferLogo}>
				<img src={"logo.png"} alt={"logo"}/>
			</div>
		);
	} else if (props.visible) {
		return (
			<div className={styles.containerBufferLogo}>
				{size.width < size.height ?
					<img src={"logo.png"} alt={"logo"} className={styles.logoThinImage}/>
				:
					<img src={"logo.png"} alt={"logo"}/>
				}
				<p>
					<Icon onClick={props.action} path={mdiEyeOff} title={"Masquer le logo"} size={2} color={typeof window === "undefined" ? "white" : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')}/>
				</p>
			</div>
			);
	} else if (size.width >= 1280) {
		return (
			<div className={styles.containerBufferLogo}>
				<p>
					<Icon onClick={props.action} path={mdiEye} title={"afficher le logo"} size={2} color={typeof window === "undefined" ? "white" : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')}/>
				</p>
			</div>
		);
	} else {
		return null;
	}
}
export default renderLogo;


// Hook
function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== 'undefined') {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
			// Add event listener
			window.addEventListener("resize", handleResize);
			// Call handler right away so state gets updated with initial window size
			handleResize();
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}