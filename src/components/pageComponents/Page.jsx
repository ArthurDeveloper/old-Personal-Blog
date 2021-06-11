import Head from 'next/head'
import Body from './Body.jsx'

import TopBar from './TopBar.jsx'

import Footer from './Footer.jsx'

export default function Page(props) {

    return (
        <div id="page">
            
            <Head>

                <title>Arthur Dev</title>

                <TopBar />
                
            </Head>

            <Body>
                {props.children}
            </Body>

        </div>
    )

} 