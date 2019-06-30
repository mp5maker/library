import React, { Fragment } from 'react'

import Head from 'next/head'

import Header from "./Header"

import Footer from "./Footer"

import "../styles/sass/Layout.scss"

const Layout = (props) => (
    <Fragment>
        <Head>
            <title>Simple Next Js Routing</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width" />
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css' />
        </Head>
        <Header />
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col">
                    { props.children }
                </div>
            </div>
        </div>
        <Footer />
    </Fragment>
)

export default Layout