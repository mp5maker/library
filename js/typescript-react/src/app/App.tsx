import * as React from 'react'

import "bootstrap/scss/bootstrap.scss"

import { NavigationBar } from '../layouts/NavigationBar'

export interface indexProps {
    compiler: string;
    framework: string;
}

export const App: React.SFC<indexProps> = (props) => (
    <React.Fragment>
        <NavigationBar {...props}/>
    </React.Fragment>
)