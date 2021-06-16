import { useEffect } from 'react';

import Page from '../src/components/pageComponents/Page';

import styles from '../src/styles/posts.module.scss'

export default function Portfolio(props) {

    const posts = props.quantity;

    useEffect(() => {

        if (posts == 0) {
            const postsContainer = document.querySelector('#posts-container');
                                    
            postsContainer.innerHTML = "No posts";
        }
    })

    return (

        <Page>

            <div id={styles['posts-container']} style={{marginTop: "80px"}}>
                
            </div>

        </Page>
        

    )

}

export async function getStaticProps() {

    const res = await fetch('http://localhost:3000/api/posts')
                    .then((res) => { return res.json(); })
                    
    return  {
        props: {
            quantity: res.quantity
        }
    }

}