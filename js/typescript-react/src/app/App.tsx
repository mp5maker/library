import * as React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { NavigationBar } from '../layouts/navigation-bar/NavigationBar';
import { Content } from '../layouts/content/Content';
import { Footer } from '../layouts/footer/Footer';

import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';

import "bootstrap/scss/bootstrap.scss"
import "./App.scss"

export interface indexProps {
    compiler: string;
    framework: string;
}

export const App: React.SFC<indexProps> = (props) => (
    <React.Fragment>
        <BrowserRouter>
            <NavigationBar {...props}/>
            <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
            </Content>
            <Footer/>
        </BrowserRouter>
    </React.Fragment>
)