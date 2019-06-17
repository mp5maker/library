import React, { Fragment } from 'react';

import { render } from 'react-dom';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead';

import './index.scss';

import 'bootstrap/dist/css/bootstrap.css';

const Index = () => (
    <Fragment>
        <nav className="navbar navbar-bg bg-dark">
            <a className="navbar-brand text-white">
                Testing
            </a>
        </nav>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col">
                    <Typeahead
                        labelKey="name"
                        options={["Photon", "Sami", "Auto", "Erfan", "Samith"]}
                        placeholder="Choose a state..."
                    />
                </div>
            </div>
        </div>
        <footer>
            <div>
                &copy;  { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
            </div>
        </footer>
    </Fragment>
)

const root = document.getElementById('root')

render (
    <Index />,
    root
);