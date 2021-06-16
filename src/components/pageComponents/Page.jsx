import Head from 'next/head'
import Body from './Body.jsx'

import TopBar from './TopBar.jsx'

import Footer from './Footer.jsx'

export default function Page(props) {

    return (
        <div id="page">
            
            <Head>

                <title>Arthur Dev</title>
                <meta name="author" content="Arthur Dev" />
                <meta name="description" content="Blog pessoal do programador Arthur Dev" />
                <meta name="keywords" content="blog, programação, posts, tutoriais" />
                <meta property="og:title" content="Arthur Dev" />
                <meta property="og:description" content="Blog pessoal do programador Arthur Dev" />
                <meta property="og:url" content={"https://arthur-devs-blog.herokuapp.com"} />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.ico" />

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