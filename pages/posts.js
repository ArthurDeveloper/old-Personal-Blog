import { useEffect } from 'react';

import Page from '../src/components/pageComponents/Page';

import styles from '../src/styles/posts.module.scss'

export default function Portfolio(props) {

    const posts = props.quantity;

    const getPosts = () => {
        
        if (posts == 0) {
            return <div style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    }}>
                        Ainda não existem posts :(
                    </div>;
        } 

        return res;
    }

    return (

        <Page>

            <div id={styles["posts-container"]}>
                {getPosts()}
            </div>

        </Page>
        

    )

}

export async function getStaticProps() {

    const res = await fetch('https://arthur-devs-blog.herokuapp.com/api/posts')
                        .then((res) => {
                            return res.json();
                        })
                        .catch((err) => {
                            console.err(err);
                        })
                    
    return  {
        props: {
            quantity: res.quantity
        }
    }

}