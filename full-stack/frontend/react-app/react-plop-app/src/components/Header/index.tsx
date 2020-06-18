import * as React from 'react'
import propTypes from 'prop-types'

interface HeaderPropsInterface {

}

interface HeaderStateInterface {

}

export class Header extends React.Component<HeaderPropsInterface, HeaderStateInterface>  {
    static propTypes: any
    static defaultProps: any

    constructor(props: HeaderPropsInterface) {
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
                <div className={`Header-container`}>

                </div>
            </React.Fragment>
        )
    }
}

Header.defaultProps = {

}

Header.propTypes = {

}

export default Header