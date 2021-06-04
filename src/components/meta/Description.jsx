export default function Description(props) {

    return (

        <meta name="description" content={props.children || props.content} />

    )

}