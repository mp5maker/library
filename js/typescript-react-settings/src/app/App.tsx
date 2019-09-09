import * as React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { NavigationBar } from '../layouts/navigation-bar/NavigationBar';
import { Content } from '../layouts/content/Content';
import { Footer } from '../layouts/footer/Footer';

import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { PureComponentPage } from '../pages/PureComponentPage';
import { HooksPage } from '../pages/HooksPage';
import { DocumentationPage } from '../pages/DocumentationPage';
import StatePage from '../pages/StatePage';

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
                    <Route exact path="/pure-component" component={PureComponentPage} />
                    <Route exact path="/hooks" component={HooksPage} />
                    <Route exact path="/state" component={StatePage} />
                    <Route exact path="/documentation" component={DocumentationPage} />
                </Switch>
            </Content>
            <Footer/>
        </BrowserRouter>
    </React.Fragment>
)