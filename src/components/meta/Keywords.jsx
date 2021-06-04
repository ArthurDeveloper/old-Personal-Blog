export default function Keywords(props) {
    
    return (

        <meta name="keywords" content={props.children || props.content} />

    )

}