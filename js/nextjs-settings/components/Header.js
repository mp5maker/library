import React, { Fragment } from 'react'

import Link from "next/link"

/* Link needs to have a tag or button */
const Header = () => (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <a className="navbar-brand">
                Next JS
            </a>
            <ul className="navbar-nav">
                <li className='nav-item'>
                    <Link href="/">
                        <a title="Home" className="nav-link">
                            Home
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href="/about">
                        <a title="About" className="nav-link">
                            About
                        </a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href="/batman-tv-shows">
                        <a title="Batman TV Shows" className="nav-link">
                            Batman TV Shows
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    </Fragment>
)

export default Header