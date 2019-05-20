import * as React from 'react'

import "./Content.scss";

export interface contentProps {
    children: React.ReactNode
}

export const Content: React.SFC<contentProps> = (props) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col mt-3">
                { props.children }
            </div>
        </div>
    </div>
)