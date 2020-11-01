import * as React from 'react'
import "./index.scss";

export interface AppPropsInterface {}

export class App extends React.Component<AppPropsInterface, {}> {
    constructor(props: AppPropsInterface) {
        super(props)
    }

    render() {
        return (
            <>
                <h1> Hello World </h1>
            </>
        )
    }
}