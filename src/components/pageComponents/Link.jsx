import NextLink from 'next/link'

export default function Link(props) {

    return (
        <NextLink href={props.href}>
            <a>{props.children}</a>
        </NextLink>
    )

}