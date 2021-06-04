export default function Page(props) {

    return (
        <html lang="pt-br">

            <meta charSet="utf-8" />

            <title>{props.title}</title>
            {props.children}
        </html>
    )

} 