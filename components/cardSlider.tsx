import React, { Component, useRef } from 'react'
import styles from '../styles/Home.module.css'
import infos from '../env/infos.tsx'
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:5000,
  speed:1000,
  adaptiveHeight:true,
};

interface IProps {
    // fullScreen: Boolean;
}

const renderSlide = (props: IProps) => {
	// console.log("props :", props)
	const slideRef = useRef();
	const back = () => {
		slideRef.current.slickPrev();
	}
	const next = () => {
		slideRef.current.slickNext();
	}
	const renderSlide = () => {
		return(
			<Slider ref={slideRef} {...settings}>
				{infos.mainContentSlide.map(e => {
					return(
						<div className={styles.cardSlideContentContainer}>
							<p className={styles.titleDesc}>
								{e.title}
							</p>
							<p className={styles.description}>
								{e.desc}
							</p>
						</div>
					);
				})}
			</Slider>
		)
	}
	const displayPrevBtn = () => {
		if (infos.mainContentSlide.length === 1) {
			return null;
		} else {
			return(
				<div className={styles.cardSlideBtn} onClick={back}>
					<p>{"<"}</p>
				</div>
			);
		}
	}
	const displayNextBtn = () => {
		if (infos.mainContentSlide.length === 1) {
			return null;
		} else {
			return(
				<div className={styles.cardSlideBtn} onClick={next}>
					<p>{">"}</p>
				</div>
			);
		}
	}
	return (
		<div className={styles.cardSlideContainer}>
			{displayPrevBtn()}
			<div className={styles.cardSlideContainerContent}>
				{renderSlide()}
	        </div>
			{displayNextBtn()}
        </div>
	);
}
export default renderSlide;
