import * as React from 'react';

import { BasicCheckbox } from '../components/CheckboxField'


interface DocumentationPagePropsInterface {}
interface DocumentationPageStateInterface {}

class DocumentationPage extends React.Component<DocumentationPagePropsInterface, DocumentationPageStateInterface> {
    constructor(props: DocumentationPagePropsInterface) {
        super(props);
        this.onChangeBasicCheckbox = this.onChangeBasicCheckbox.bind(this)
        this.onChangeBasicGroupChange = this.onChangeBasicGroupChange.bind(this)
    }

    onChangeBasicGroupChange(event: any) {
        console.log('hello')
    }

    onChangeBasicCheckbox(event: any) {
        console.log(event)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <h4>Checkbox</h4>
                        <div>
                            <BasicCheckbox
                                disabled={false}
                                checked={true}
                                id="basic-checkbox-test"
                                onChange={this.onChangeBasicCheckbox}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DocumentationPage
export { DocumentationPage }