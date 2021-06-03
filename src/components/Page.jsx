export default function Page(props) {

    return (
        <html lang="pt-br">
            <title>{props.title}</title>
            {props.children}
        </html>
    )

} 