import * as React from 'react';

interface homeProps {}

export const Home: React.SFC<homeProps> = () => (
    <React.Fragment>
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
    </React.Fragment>
)