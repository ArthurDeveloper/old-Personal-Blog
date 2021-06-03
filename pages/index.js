import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

import Page from './Page.jsx'

export default function Home() {
  return (

    <Page title="Arthur Dev">

      <Head>
        <h1 className="title">Blog do Arthur Dev &#x1F601;</h1>
        <h2 className="subtitle">Aqui você encontra diversos assuntos sobre programação e tecnologia em geral!</h2>
      </Head>

      <body>
        
      </body>

    </Page> 

  )
}
