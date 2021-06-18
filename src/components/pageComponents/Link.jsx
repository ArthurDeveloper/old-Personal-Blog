import NextLink from 'next/link'

import { useEffect } from 'react'

import loading from '../../scripts/loading'

export default function Link(props) {

    return (
        <NextLink href={props.href}>
            <a onClick={loading()}>{props.children}</a>
        </NextLink>
    )

}