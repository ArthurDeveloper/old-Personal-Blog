import Page from '../src/components/pageComponents/Page.jsx'

import Code from '../src/components/pageComponents/Code.jsx'

import codeStyles from '../src/styles/code.module.scss'

export default function About(props) {

    return (
        <Page>

            <div id="content">
                <h1 className="title centered" style={{marginTop: "80px"}}>
                    Sobre
                </h1>

                <p style={{color: "#CCCCCC", marginTop: "40px"}}>
                    Olá! Meu nome é Arthur, sou programador principalmente de web e jogos, <br/>
                    mas às vezes tento programar outras coisas também.  <br/>
                </p>

                <Code>
                    aaa
                </Code>

                <div className={codeStyles['code-box']}>
                    <code>
                        <pre>
                            <ol>
                                <li>
                                    <span className={codeStyles['native-function']}>
                                        print</span><span className={codeStyles['operator']}>(</span>
                                        <span className={codeStyles['string']}>'Olá, mundo!'</span>
                                        <span className={codeStyles['operator']}>)</span>
                                </li>

                                <li>
                                    <span className={codeStyles['reserved-word']}>
                                        import 
                                    </span> math
                                </li>
                            </ol>
                        </pre>
                    </code>
                </div>
            </div>
        </Page>
    )

}