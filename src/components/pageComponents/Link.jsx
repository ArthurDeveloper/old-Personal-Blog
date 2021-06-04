export default function Link(props) {

    return (
        <a href={props.href} target={props.target}>
            {props.children}
        </a>
    )

}