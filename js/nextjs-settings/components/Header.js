import React, { Fragment } from 'react'

import Link from "next/link"

/* Link needs to have a tag or button */
const Header = () => (
    <Fragment>
        <Link href="/">
            <a title="Home">
                Home
            </a>
        </Link> &nbsp;
        <Link href="/about">
            <a title="About">
                About
            </a>
        </Link>
    </Fragment>
)

export default Header