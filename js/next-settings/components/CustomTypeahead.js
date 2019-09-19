import React, { Component, Fragment, createRef } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';


export class CustomTypeahead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
        this.onChange = this.onChange.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.typeaheadRef = createRef()
    }

    onInputChange(event) {
        if (this.props.onInputChange) this.props.onInputChange(event)
    }

    onChange(selected) {
        if (this.props.onChange) this.props.onChange(selected)
        this.setState({ selected })
    }

    componentDidUpdate(prevProps) {
        if (this.props.defaultSelected !== prevProps.defaultSelected) {
            this.setState({ selected: this.props.defaultSelected })
        }
    }

    componentDidMount() {
        if (this.props.onRef) this.props.onRef(this.typeaheadRef)
    }

    render() {
        return (
            <Fragment>
                <Typeahead
                    ref={this.typeaheadRef}
                    labelKey={this.props.labelKey ? this.props.labelKey : ''}
                    id={this.props.id ? this.props.id : ''}
                    filterBy={this.props.filterBy ? this.props.filterBy : ['id']}
                    onChange={this.onChange}
                    onInputChange={this.onInputChange}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    defaultInputValue={this.props.defaultInputValue ? this.props.defaultInputValue : ''}
                    options={this.props.options ? this.props.options : [] }
                    selected={this.state.selected} />
            </Fragment>
        )
    }
}