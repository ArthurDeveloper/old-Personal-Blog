import Head from 'next/head'
import Image from 'next/image'

import Page from '../src/components/pageComponents/Page.jsx'
import TopBar from '../src/components/pageComponents/TopBar.jsx'
import Item from '../src/components/pageComponents/Item.jsx'

import Body from '../src/components/pageComponents/Body.jsx'

import Link from '../src/components/pageComponents/Link.jsx'

export default function App() {
  return (

    <Page title="Arthur Dev">

      <Head>

        <TopBar>

          <Item>
            <Link href="/">
                <span style={{"font-size": 1.2+"em;"}}>
                  Arthur Dev
                </span>
            </Link>
          </Item>

          <Item>
            <Link href="#" >Teste</Link>
          </Item>

          <Item className="txt-align-right">
            <Link href="#">teste 2</Link>
          </Item>

        </TopBar>

        <h1 className="title">
          Blog do Arthur Dev &#x1F601;
        </h1>

        <h2 className="subtitle">
          Aqui você encontra diversos assuntos sobre programação e tecnologia em geral!
        </h2>
        
      </Head>

      <Body>
        
      </Body>

    </Page> 

  )
}
