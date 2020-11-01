import React, { Component, useRef } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import PrevBtnSlider from './prevBtnSlider.tsx';
import NextBtnSlider from './nextBtnSlider.tsx';
import FullScreenBtnSlider from './fullScreenBtnSlider.tsx';
import infos from '../env/infos.tsx'

interface IProps {
    fullScreen: Boolean;
    defineFullScreen: any;
}

const renderCarousel = (props: IProps) => {
	// console.log("props :", props)
	const slideRef = useRef();
	const slideImages = infos.slideImages;
	const properties = {
		duration: 5000,
		autoplay: true,
		transitionDuration: 500,
		arrows: false,
		infinite: true,
		easing: "ease",
		// indicators: (i) => <div className="indicator">{i + 1}</div>
	};
	const back = () => {
		slideRef.current.goBack();
	}
	const next = () => {
		slideRef.current.goNext();
	}
	const renderSlide = () => {
		return(
			<div className="slide-container">
				<FullScreenBtnSlider action={props.defineFullScreen} fullScreen={props.fullScreen}/>
				<PrevBtnSlider action={back} fullScreen={props.fullScreen}/>
				<NextBtnSlider action={next} fullScreen={props.fullScreen}/>
				<Slide ref={slideRef} {...properties}>
					{slideImages.map((each, index) => (
						<div key={index} className="each-slide">
							<img src={each} alt="sample" />
						</div>
					))}
				</Slide>
			</div>
		)
	}
	return (
		<div className={props.fullScreen ? "slide-wrapper-container-full-screen" : "slide-wrapper-container"}>
			{renderSlide()}
		</div>
	);
}
export default renderCarousel;
