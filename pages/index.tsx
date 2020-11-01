import React, { Component, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/caroussel.tsx'
import CardSlider from '../components/cardSlider.tsx'
import Logo from '../components/logo.tsx'
import infos from '../env/infos.tsx'
import Icon from "@mdi/react";
import { mdiEmail, mdiMapMarker, mdiPhone } from "@mdi/js";

interface IProps {
}

interface IState {
  fullScreen: boolean,
}


export default class Home extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen:false,
      displayLogo:false,
    }
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('footer');
    if (this.isBottom(wrappedElement)) {
      console.log('footer bottom reached');
      this.setState({displayLogo:true});
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  renderHead = () => {
    return(
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }

  renderMain = () => {
    return(
      <main className={this.state.fullScreen ? styles.hidden : styles.main}>
        {this.renderContent()}
        {this.renderContact()}
      </main>
    )
  }

  renderContent = () => {
    return(
      <div className={styles.contentContainer}>
        <div>
          <Logo visible={this.state.displayLogo} action={() => this.setState({displayLogo:!this.state.displayLogo})}/>
          <h1 className={styles.title}>
            {infos.shopName}
          </h1>
          <p className={styles.accroche}>
            {infos.accroche}
          </p>
        </div>
        <CardSlider/>
      </div>
    )
  }

  renderContact = () => {
    return(
      <div className={styles.contactContainer}>
        <div className={styles.contactContentContainer}>
          <h1 className={styles.contactTitle}>Contact</h1>
          <div className={styles.contactLine}>
            <Icon path={mdiPhone} title={"mail"} size={1} color={typeof window === "undefined" ? "black" : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')}/>
            <p>{infos.tel}</p>
          </div>
          <div className={styles.contactLine}>
            <Icon path={mdiMapMarker} title={"mail"} size={1} color={typeof window === "undefined" ? "black" : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')}/>
            <p>{infos.adr}</p>
          </div>
          <div className={styles.contactLine}>
            <Icon path={mdiEmail} title={"mail"} size={1} color={typeof window === "undefined" ? "black" : getComputedStyle(document.documentElement).getPropertyValue('--mainColor')}/>
            <p>{infos.mail}</p>
          </div>
        </div>
      </div>
    )
  }

  renderFooter = () => {
    return(
      <footer id={"footer"} className={this.state.fullScreen ? styles.hidden : styles.footer}>
        <img src={"Silhouet_France_with_Flag.png"} alt={"France aux couleur du drapeau "} height={"100%"}/>
        <div className={styles.footerTextContainer}>
          <p className={styles.footerTitle}>Cet artisan français à besoin de soutient !</p>
          <p className={styles.footerText}>Nous pouvons l'aider en cette période de COVID en continuant d'acheter chez lui.</p>
        </div>
      </footer>
    )
  }

  render() {
    return(
      <div className={styles.container}>
        {this.renderHead()}
        <Carousel fullScreen={this.state.fullScreen} defineFullScreen={() => this.setState({fullScreen:!this.state.fullScreen})}/>
        {this.renderMain()}
        {this.renderFooter()}
      </div>
    )
  }
}

// export async function getStaticProps(context) {
//   await fetch('');
//   return {
//     props: {},
//   }
// }


