import { useEffect } from 'react';

import Page from '../src/components/pageComponents/Page';

import styles from '../src/styles/posts.module.scss'

export default function Portfolio(props) {

    const posts = props.quantity;

    return (

        <Page>

            <div id={styles['posts-container']} style={{marginTop: "80px"}}>
                {posts == 0 ? "No posts" : null}
                
            </div>

        </Page>
        

    )

}

export async function getStaticProps() {

    const res = await fetch('https://arthur-devs-blog.herokuapp.com/api/test')
                        .then((res) => { return res.json(); })
                    
    return  {
        props: {
            quantity: 0
        }
    }

}