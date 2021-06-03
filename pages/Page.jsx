export default function Page(props) {

    return (
        <div>
            <title>{props.title}</title>
            {props.children}
        </div>
    )

} 