import * as React from 'react'
import propTypes from 'prop-types'

interface HelloPropsInterface {

}

interface HelloStateInterface {

}

export class Hello extends React.Component<HelloPropsInterface, HelloStateInterface>  {
    static propTypes: any
    static defaultProps: any

    constructor(props: HelloPropsInterface) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    componeneDidUpdate(prevProps: any) {

    }

    render() {
        return (
            <React.Fragment>
                <div className={`Hello-container`}>

                </div>
            </React.Fragment>
        )
    }
}

Hello.defaultProps = {

}

Hello.propTypes = {

}

export default Hello