import Head from 'next/head'
import Image from 'next/image'
import Page from '../src/components/pageComponents/Page'
import TopBar from '../src/components/pageComponents/TopBar'
import Item from '../src/components/pageComponents/Item'

import { useEffect } from 'react'

import Body from '../src/components/pageComponents/Body'

import Link from '../src/components/pageComponents/Link'

import styles from '../src/styles/home.module.scss'

export default function Home() {

  return (

    <Page>

      <Head>
        <title>Arthur Dev</title>
        <meta name="google-site-verification" content="8ScuzwwlRf-ReiJNNvIFl8dLe9G_SmqGAiw83nnDiOM" />
        <meta name="author" content="Arthur Dev" />
        <meta name="description" content="Blog pessoal do programador Arthur Dev, aonde
                                          são postados conteúdos sobre programação, game
                                          development e etc." />
        <meta name="keywords" content="blog, programação, posts, tutoriais" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <header>
        <section id={styles['profile']}>
          <img id={styles['profile-img']} className="circle-radius" src="https://github.com/arthurdeveloper.png" alt="Foto de perfil do github"/>

          <h1 className="title centered" style={{marginBottom: "20px"}}>
            Arthur Dev
          </h1>

          <h2 className="subtitle centered">
            Desenvolvedor web e games
          </h2>
          
        </section>
      </header>



    </Page> 

  )
}
