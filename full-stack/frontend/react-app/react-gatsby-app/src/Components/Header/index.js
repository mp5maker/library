import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

import { Logo } from '../Images/ninja.jpg'
import './styles.scss'

export const Header = ({ title } = {}) => {
    return (
        <div className={`header-container`}>
            <h1>
                <span>
                    <FontAwesomeIcon icon={faReact} /> &nbsp;
                </span>
                <span>
                    { title } &nbsp;
                </span>
                <span>
                    <img
                        src={Logo}
                        width={40}
                        height={47.6} />
                </span>
            </h1>
        </div>
    )
}