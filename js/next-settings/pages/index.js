import React, { Fragment, Component, createRef } from 'react'
import { CustomTypeahead } from '../components/CustomTypeahead'

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

const employee = [
    {
        id: 1,
        name: 'Photon'
    },
    {
        id: 2,
        name: 'Sami'
    },
    {
        id: 3,
        name: 'Rafsan'
    }
]


class Home extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.customTypeaheadRef = ""
    }


    onChange(selected) {
        console.log('On Change')
        console.log(selected)
        console.log('Typeahed Ref')
        console.log(this.customTypeaheadRef)
    }

    onInputChange(event) {
        console.log('On Input Change')
        console.log(event)
    }


    render(){
        return (
            <Fragment>
                <nav className="navbar navbar-bg bg-dark">
                    <a className="navbar-brand text-white">
                        Testing
                    </a>
                </nav>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col">
                            <CustomTypeahead
                                onRef={(ref) => this.customTypeaheadRef = ref}
                                labelKey={`name`}
                                id={`testing`}
                                filterBy={['name']}
                                placeholder={`Please enter your name`}
                                onChange={this.onChange}
                                options={employee}
                                disabled={false}
                                defaultInputValue={`Sami`}
                                defaultSelected={[{ id: 2, name: 'Sami'}]}
                                onInputChange={this.onInputChange}
                            />
                        </div>
                    </div>
                </div>
                <footer>
                    <div>
                        &copy; { new Date().getFullYear() } All Rights Reserved, Photon Enterprise
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Home;