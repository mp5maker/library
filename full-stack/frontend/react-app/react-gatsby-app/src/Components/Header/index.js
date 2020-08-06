import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faHome, faUser, faFile } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'gatsby'

import './styles.scss'

export const Header = ({ title, page } = {}) => {
    return (
        <div className={`header-container`}>
            <div className={`header-content-left`}>
                <h1>
                    <span>
                        <FontAwesomeIcon icon={faReact} /> &nbsp;
                    </span>
                    <span>
                        { title } &nbsp;
                    </span>
                </h1>
                <small
                    className={`rectangle`}
                    style={{ marginLeft: `6px` }}>
                    { page }
                </small>
            </div>
            <div className="header-content-right">
                <ul>
                    <li style={{ marginLeft: `6px` }}>
                        <Link to={`/`}>
                            <FontAwesomeIcon icon={faHome} />
                        </Link>
                    </li>
                    <li style={{ marginLeft: `6px` }}>
                        <Link to={`/about`}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li style={{ marginLeft: `6px` }}>
                        <Link to={`/my-files`}>
                            <FontAwesomeIcon icon={faFile} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}