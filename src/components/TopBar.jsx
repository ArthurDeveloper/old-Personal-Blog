export default function TopBar(props) {

    return (

        <nav id="top-bar">
            <ul>
                {props.children}
            </ul>
        </nav>

    )

}