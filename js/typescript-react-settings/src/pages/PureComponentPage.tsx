import * as React from 'react'

/* This should only be used for huge Layouts not for small casses */
class PureComponentPage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h4>
                        Pure Component Page
                    </h4>
                </div>
                <div className="common-header">
                    <div>
                        On the left
                    </div>
                    <div>
                        On the right
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PureComponentPage
export { PureComponentPage }