import React from 'react'

import { render } from 'react-dom'

import './index.scss'

import 'bootstrap/dist/css/bootstrap.css';

const Index = () => (
    <div>
        Hello Checking and testing
    </div>
)

render (
    <Index />,
    document.getElementById('root')
)