import Head from 'next/head'
import Image from 'next/image'

import Page from '../src/components/Page.jsx'
import TopBar from '../src/components/TopBar.jsx'
import Item from '../src/components/Item.jsx'

export default function App() {
  return (

    <Page title="Arthur Dev">

      <Head>

        <TopBar>

          <Item>
            <a href="#">Teste</a>
          </Item>

          <Item>
            <a href="#">teste 2</a>
          </Item>

        </TopBar>

        <h1 className="title">Blog do Arthur Dev &#x1F601;</h1>
        <h2 className="subtitle">Aqui você encontra diversos assuntos sobre programação e tecnologia em geral!</h2>
        
      </Head>

      <body>
        
      </body>

    </Page> 

  )
}
