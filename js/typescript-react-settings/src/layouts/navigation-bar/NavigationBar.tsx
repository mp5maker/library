import * as React from 'react'

import { NavLink, withRouter } from 'react-router-dom';

import * as ReactBootstrap from 'react-bootstrap'

export interface appProps {
    compiler: string,
    framework: string
}

export const NavigationBar:React.SFC<appProps> = ({compiler, framework}) => {
    return (
        <React.Fragment>
            <ReactBootstrap.Navbar bg="light" expand="lg">
                <ReactBootstrap.Navbar.Brand href="#home">
                    { compiler } { framework }
                </ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                        <NavLink to="/pure-component" className="nav-link">
                            Pure Component
                        </NavLink>
                        <NavLink to="/hooks" className="nav-link">
                            Hooks
                        </NavLink>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.Nav.Link href="#login">
                            Login
                        </ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#signup">
                            Signup
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </React.Fragment>
    )
}