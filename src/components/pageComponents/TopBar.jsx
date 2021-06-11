import Link from './Link.jsx'
import Item from './Item.jsx'

export default function TopBar(props) {

    return (

        <nav id="top-bar">
            <ul id="top-bar-items">

                <div id="top-bar-title">
                    <Link href="#"> 
                        Arthur Dev
                    </Link>
                </div>

                <Item className="item">
                    <Link href="#">
                        Sobre
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