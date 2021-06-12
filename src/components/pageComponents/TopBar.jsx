import Link from './Link.jsx'
import Item from './Item.jsx'

export default function TopBar(props) {

    return (

        <nav id="top-bar">

            <div id="top-bar-title">
                <Link href="/"> 
                    Arthur Dev
                </Link>
            </div>

            <ul id="top-bar-items">

                <Item className="item">
                    <Link href="#">
                        Sobre
                    </Link>
                </Item>
                
                <Item className="item">
                    <Link href="https://github.com/arthurdeveloper" target="_blank">
                        Github
                    </Link>
                </Item>

                <Item className="item">
                    <Link href="#">
                        Posts
                    </Link>
                </Item>

                <Item className="item">
                    <Link href="#">
                        Portfólio
                    </Link>
                </Item>
                
            </ul>
        </nav>

    )

}