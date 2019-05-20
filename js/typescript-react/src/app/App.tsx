import * as React from 'react'

import "bootstrap/scss/bootstrap.scss"
import "./App.scss"

import { NavigationBar } from '../layouts/navigation-bar/NavigationBar'
import { Content } from '../layouts/content/Content'
import { Footer } from '../layouts/footer/Footer'

export interface indexProps {
    compiler: string;
    framework: string;
}

export const App: React.SFC<indexProps> = (props) => (
    <React.Fragment>
        <NavigationBar {...props}/>
        <Content />
        <Footer/>
    </React.Fragment>
)