export default function Footer(props) {

    return (

        <footer style={{backgroundColor: props.color}}>
            {props.children}
        </footer>

    )

}