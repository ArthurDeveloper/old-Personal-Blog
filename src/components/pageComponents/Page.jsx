import ColorThemeChange from './ColorThemeChange.jsx'

import Body from './Body.jsx'

import TopBar from './TopBar.jsx'

import Footer from './Footer.jsx'

export default function Page(props) {

    return (
        <div id="page">

                <body>

                    <ColorThemeChange>

                        <TopBar />

                        {props.children}

                    </ColorThemeChange>

                </body>

            

        </div>
        
    )

} 