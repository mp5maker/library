import * as React from 'react';

import { Trans } from 'react-i18next'

interface contactPropsInterface { }
interface contactStateInterface { }

class Contact extends React.Component<contactPropsInterface, contactStateInterface> {
    constructor(props: contactPropsInterface) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h4>
                        <Trans>
                            CONTACT
                        </Trans>
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

export default Contact

export { Contact }