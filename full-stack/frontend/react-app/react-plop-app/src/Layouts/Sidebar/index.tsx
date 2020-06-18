import * as React from 'react'
import propTypes from 'prop-types'

interface SidebarPropsInterface {

}

interface SidebarStateInterface {

}

export class Sidebar extends React.Component<SidebarPropsInterface, SidebarStateInterface>  {
    static propTypes: any
    static defaultProps: any

    constructor(props: SidebarPropsInterface) {
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
                <div className={`Sidebar-container`}>

                </div>
            </React.Fragment>
        )
    }
}

Sidebar.defaultProps = {

}

Sidebar.propTypes = {

}

export default Sidebar