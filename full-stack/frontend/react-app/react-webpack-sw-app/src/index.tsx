import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
    <App />,
    document.getElementById('app')
)

serviceWorker.register()