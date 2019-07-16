import * as React from 'react'

import { ExpensiveCalculation } from '../utilities/ExpensiveCalculation'

/* This should only be used for huge Layouts not for small casses */
/* Cannot get benifitted from the inline css */
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
                <div>
                    <h4>
                        Using Heaving Compuation using React Memo
                    </h4>
                    <div>
                        {/* {
                            React.useMemo(() => ExpensiveCalculation({ firstNumber: 1, secondNumber: 2 }), [1, 2])
                        } */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PureComponentPage
export { PureComponentPage }