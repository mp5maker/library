import React from 'react'

import get from 'lodash/get'
import { axiosInstance as axios } from '../../axios'

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: "",
                password: ""
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit(event) {
        event.preventDefault()
        const username = get(this.state.form, 'username', '')
        const password = get(this.state.form, 'password', '')
        if (username && password) {
            const onSuccess = (response) => {
                const token = get(response, 'data.token', '')
                axios.defaults.headers['Authorization'] = `JWT ${token}`;
                localStorage.setItem('token', token);
            }

            const onError = () => console.log('error')

            axios.post('token-auth/', { ...this.state.form })
                .then(onSuccess)
                .catch(onError)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h4>
                        Login JWT Test
                    </h4>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="username" />
                    </div>
                    <div>
                        <input
                            onChange={this.onChange}
                            type="password"
                            name="password" />
                    </div>
                    <div>
                        <button>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}