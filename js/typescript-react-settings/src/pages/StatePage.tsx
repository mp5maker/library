import * as React from 'react';

interface StatePagePropsInterface {

}

interface StatePageStateInterface {

}


class StatePage extends React.Component<StatePagePropsInterface, StatePageStateInterface> {
    constructor(props: StatePagePropsInterface) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                Hello and Hi
            </React.Fragment>
        )
    }
}

export default StatePage
export { StatePage }