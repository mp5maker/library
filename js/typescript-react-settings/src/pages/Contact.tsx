import * as React from 'react';

interface contactProps { }

export const Contact: React.SFC<contactProps> = () => (
    <React.Fragment>
        <div>
            <h4>
                Contact
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
    </React.Fragment>
)