import React, { Fragment, Component } from 'react'

import Router from "next/router"

import Link from "next/link"

const Routes = {
    HOME: "/",
    ABOUT: "/about",
    BATMAN_TV_SHOWS: "/batman-tv-shows"
}

/* Link needs to have a tag or button */
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pathname: {
                home: false,
                about: false,
                batman: false
            }
        }
    }

    componentDidMount() {
        const pathname = Router.router ? Router.router.pathname ? Router.router.pathname : "" : "";
        this.setState({
            pathname: {
                home: Routes.HOME == pathname ? 'active' : '',
                about: Routes.ABOUT == pathname ? 'active' : '',
                batman: Routes.BATMAN_TV_SHOWS == pathname ? 'active' : ''
            }
        })
    }

    render() {
        const { home, about, batman } = this.state.pathname
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                    <a className="navbar-brand">
                        Next JS
                    </a>
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link href={Routes.HOME}>
                                <a title="Home" className={`nav-link ${home}`}>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href={Routes.ABOUT}>
                                <a title="About" className={`nav-link ${about}`}>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href={Routes.BATMAN_TV_SHOWS}>
                                <a title="Batman TV Shows" className={`nav-link ${batman}`}>
                                    Batman TV Shows
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default Header