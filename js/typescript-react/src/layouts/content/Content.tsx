import * as React from 'react'

import "./Content.scss";

export interface contentProps {}

export const Content: React.SFC<contentProps> = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col mt-3">
                <div>
                    <h4>
                        Home
                    </h4>
                </div>
                <div className="common-header">
                    <div>
                        On the left
                        </div>
                    <div>
                        On the right
                    </div>
                </div>
            </div>
        </div>
    </div>
)