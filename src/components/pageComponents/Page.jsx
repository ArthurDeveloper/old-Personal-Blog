import Head from 'next/head'
import Body from './Body.jsx'

import TopBar from './TopBar.jsx'

import Footer from './Footer.jsx'

export default function Page(props) {

    return (
        <div id="page">
            
            <Head>

                

                <TopBar />
                
            </Head>

            <Body>
                {props.children}

                <input type="checkbox" id="dark-mode-toggle-checkbox" >
                    
                </input>
            </Body>

        </div>
    )

} 