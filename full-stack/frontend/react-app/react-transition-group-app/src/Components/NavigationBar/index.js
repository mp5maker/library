import React from 'react'
import { Link } from 'react-router-dom'

export class NavigationBar extends React.Component {
    render() {
        return (
            <nav className={`nav`}>
                <Link
                    to={{
                        pathname: '/',
                        state: { prev: false }
                    }}
                    className="nav__link">
                    Home
                </Link>
                <Link
                    to={{
                        pathname: '/about',
                        state: { prev: true }
                    }}
                    className="nav__link">
                    About
                </Link>
            </nav>
        )
    }
}