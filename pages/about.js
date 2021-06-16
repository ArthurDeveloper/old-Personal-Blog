import Page from '../src/components/pageComponents/Page.jsx'

import Code from '../src/components/pageComponents/Code.jsx'

import styles from '../src/styles/about.module.scss'

import codeStyles from '../src/styles/code.module.scss'

export default function About(props) {

    return (
        <Page>

            <div id="content">
                <h1 className="title centered" style={{marginTop: "80px"}}>
                    Sobre
                </h1>

                <p id={styles['bio']}>
                    Olá! Meu nome é Arthur, sou programador principalmente de web e jogos,
                    mas às vezes tento programar outras coisas também.  
                </p>

                <Code>
                    <span className={codeStyles['native-function']}>
                        print
                    </span><span className={codeStyles['operator']}>
                        (
                    </span><span className={codeStyles['string']}>
                        'Olá, mundo!'
                    </span><span className={codeStyles['operator']}>
                        )
                    </span>
                </Code>

            </div>
        </Page>
    )

}