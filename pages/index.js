import Head from 'next/head'
import Image from 'next/image'
import Page from '../src/components/pageComponents/Page'
import TopBar from '../src/components/pageComponents/TopBar'
import Item from '../src/components/pageComponents/Item'

import Body from '../src/components/pageComponents/Body'

import Link from '../src/components/pageComponents/Link'

import styles from '../src/styles/home.module.scss'

export default function App() {

  return (

    <Page>


      <div id={styles['profile']}>
        <img id={styles['profile-img']} className="circle-radius" src="https://github.com/arthurdeveloper.png" alt="Foto de perfil do github"/>
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
