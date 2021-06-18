import { useEffect } from 'react'

import Head from 'next/head'

import Page from '../src/components/pageComponents/Page.jsx'

import Code from '../src/components/pageComponents/Code.jsx'

import styles from '../src/styles/about.module.scss'

export default function About(props) {

    return (
        <Page>

            <Head>
                <title>Sobre</title>
                <meta name="author" content="Arthur Dev" />
                <meta name="description" content="Um pouco sobre Arthur Dev" />
                <meta name="keywords" content="blog, programação, posts, tutoriais, sobre, about" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div style={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                            }}>
                    <header>
                        <h1 className="title centered" style={{marginTop: "80px", width: "500px"}}>
                            Sobre
                        </h1>
                    </header>

                    <p id={styles['bio']}>
                        Olá! Meu nome é Arthur, sou programador principalmente de web e jogos,
                        mas às vezes tento programar outras coisas também.  
                    </p>

                </div>
            </div>
        </Page>
    )

}