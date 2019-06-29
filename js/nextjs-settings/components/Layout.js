import React, { Fragment } from 'react'

import Header from "./Header"

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: `1px solid #DDD`
}

/* Styling the layout */
const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        { props.children }
    </div>
)

export default Layout