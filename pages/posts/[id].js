import Page from '../../src/components/pageComponents/Page'

import { useRouter } from 'next/router'

export default function Post() {

    const { id } = useRouter().query; 

    return (
        <Page>
            <h1 className="centered" style={{marginTop: "80px"}}>Você esta no post {id}</h1>
        </Page>
    )

}