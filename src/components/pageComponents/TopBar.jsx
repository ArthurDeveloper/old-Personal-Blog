import Link from './Link.jsx'
import Item from './Item.jsx'

import styles from '../../../src/styles/topbar.module.scss'

export default function TopBar(props) {

    return (

        <nav id={styles['top-bar']}>

            <div id={styles["top-bar-title"]}>
                <Link href="/"> 
                    Arthur Dev
                </Link>
            </div>

            <ul id={styles["top-bar-items"]}>

                <Item>
                    <Link href="#">
                        Sobre
                    </Link>
                </Item>
                
                <Item>
                    <Link href="https://github.com/arthurdeveloper" target="_blank">
                        Github
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        Posts
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        Portfólio
                    </Link>
                </Item>
                
            </ul>
        </nav>

    )

}