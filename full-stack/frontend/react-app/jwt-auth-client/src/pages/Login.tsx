import React from 'react'
import { useLoginMutation } from '../generated/graphql'
import { RouteComponentProps } from 'react-router'

interface Props { }

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState("")
    const [login] = useLoginMutation()

    return (
        <div>
            <form
                onSubmit={async event => {
                    event.preventDefault()
                    const response = await login({
                        variables: {
                            email,
                            password
                        }
                    })
                    history.push("/")
                    console.log(response)
                }}>
                <div>
                    <input value={email} placeholder="email" onChange={(event) => setEmail(event?.target.value)} />
                </div>
                <div>
                    <input type="password" value={password} placeholder="password" onChange={(event) => setPassword(event?.target.value)} />
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}