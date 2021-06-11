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

      <h1 className="title">
        Blog do Arthur Dev &#x1F601;
      </h1>

      <h2 className="subtitle">
        Aqui você encontra diversos assuntos sobre programação e tecnologia em geral!
      </h2>

    </Page> 

  )
}
