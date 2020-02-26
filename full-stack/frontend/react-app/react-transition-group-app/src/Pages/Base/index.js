import React from 'react'
import get from 'lodash/get'
import { withRouter } from 'react-router-dom'

export class Base extends React.Component {
    render() {
        const {
            children,
            location,
            color,
            backgroundColor
        } = this.props
        const state = get(location, 'state', '')
        const stateClass =  state && state.prev ? `page--prev` : ``

        return (
            <section
                style={{ color, backgroundColor }}
                className={`page ${stateClass}`}>
                <div className={`page__inner`}>
                    { children }
                </div>
            </section>
        )
    }
}

export default withRouter(Base)

Base.defaultProps = {
    color: '#fff',
    backgroundColor: '#223',
};