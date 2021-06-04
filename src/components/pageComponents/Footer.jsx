export default function Footer(props) {

    return (

        <footer style={{"background-color": props.color}}>
            {props.children}
        </footer>

    )

}