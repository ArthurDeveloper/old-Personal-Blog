export default function Author(props) {

    return (

        <meta name="author" content={props.children || props.name} />

    )

}