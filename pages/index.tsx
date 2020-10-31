import React, { Component } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Carousel from '../components/caroussel.tsx'
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
    }
  }

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
          <h1 className={styles.title}>
            {infos.shopName}
          </h1>
          <p className={styles.accroche}>
            {infos.accroche}
          </p>
        </div>
        <p className={styles.description}>
          {infos.description}
        </p>
      </div>
    )
  }

  renderContact = () => {
    return(
      <div className={styles.contactContainer}>
        <h1>Contact</h1>
        <div className={styles.contactLine}>
          <Icon path={mdiEmail} title={"mail"} size={1} color="black"/>
          <p>{infos.mail}</p>
        </div>
        <div className={styles.contactLine}>
          <Icon path={mdiPhone} title={"mail"} size={1} color="black"/>
          <p>{infos.tel}</p>
        </div>
        <div className={styles.contactLine}>
          <Icon path={mdiMapMarker} title={"mail"} size={1} color="black"/>
          <p>{infos.adr}</p>
        </div>
      </div>
    )
  }

  renderFooter = () => {
    return(
      <footer className={this.state.fullScreen ? styles.hidden : styles.footer}>
        Je suis un footer
      </footer>
    )
  }

  render() {
    console.log("TEST re-render")
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
