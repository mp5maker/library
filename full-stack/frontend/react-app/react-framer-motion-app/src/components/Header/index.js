import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Fragment>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: `30px`,
                    marginBottom: `12px`,
                    padding: `5px`,
                    alignItems: `center`
                }}>
                <div style={{marginRight: `5px`}}>
                    <Link to="/">Home</Link>
                </div>
                <div style={{marginRight: `5px`}}>
                    <Link to="/about-us">About Us</Link>
                </div>
                <div style={{marginRight: `5px`}}>
                    <Link to="/contact-us">Contact Us</Link>
                </div>
            </div>
        </Fragment>
    )
}