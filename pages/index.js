import Head from 'next/head'
import Image from 'next/image'
import Page from '../src/components/pageComponents/Page.jsx'
import TopBar from '../src/components/pageComponents/TopBar.jsx'
import Item from '../src/components/pageComponents/Item.jsx'

import Body from '../src/components/pageComponents/Body.jsx'

import Link from '../src/components/pageComponents/Link.jsx'

import styles from '../src/styles/home.module.scss'

export default function App() {

  return (

    <Page>

      <div id={styles['profile']}>
        <img id={styles['profile-img']} className="circle-radius" src="https://github.com/arthurdeveloper.png" />
        <h1 className="title centered" style={{marginBottom: "20px"}}>
          Arthur Dev
        </h1>

        <h2 className="subtitle centered">
          Desenvolvedor web e games
        </h2>
      </div>

    </Page> 

  )
}
