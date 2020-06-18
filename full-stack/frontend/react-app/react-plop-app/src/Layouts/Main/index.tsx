import * as React from 'react'
import propTypes from 'prop-types'

interface MainPropsInterface {

}

interface MainStateInterface {

}

export class Main extends React.Component<MainPropsInterface, MainStateInterface>  {
    static propTypes: any
    static defaultProps: any

    constructor(props: MainPropsInterface) {
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
                <div className={`Main-container`}>

                </div>
            </React.Fragment>
        )
    }
}

Main.defaultProps = {

}

Main.propTypes = {

}

export default Main