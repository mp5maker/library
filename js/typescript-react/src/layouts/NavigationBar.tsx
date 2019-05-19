import * as React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export interface appProps {
    compiler: string,
    framework: string
}

export const NavigationBar:React.SFC<appProps> = ({compiler, framework}) => {
    return (
        <h1>Hello</h1>
        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="#home">
        //         { compiler } { framework }
        //     </Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#home">
        //                 Home
        //             </Nav.Link>
        //             <Nav.Link href="#link">
        //                 Contact
        //             </Nav.Link>
        //         </Nav>
        //         <Nav>
        //             <Nav.Link href="#login">
        //                 Login
        //             </Nav.Link>
        //             <Nav.Link href="#signup">
        //                 Signup
        //             </Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}