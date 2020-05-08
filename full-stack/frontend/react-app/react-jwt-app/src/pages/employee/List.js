import React from 'react'

import { axiosInstance as axios } from '../../axios'

export class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const onSuccess = (response) => {
            console.log(response)
        }

        const onError = (error) => {
            console.log(error)
        }

        axios.get('employee')
            .then(onSuccess)
            .catch(onError)
    }

    render() {
        return (
            <div>
                Employee List
            </div>
        )
    }
}