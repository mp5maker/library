import React from 'react'
import { useLoginMutation, MeDocument } from '../generated/graphql'
import { RouteComponentProps } from 'react-router'
import { setAccessToken } from '../accessToken'

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
                        },
                        update: (store, { data }) => {
                            if (!data) return null
                            store.writeQuery({
                                query: MeDocument,
                                data: {
                                    __typename: 'Query',
                                    me: data.login.user
                                }
                            })
                        }
                    })
                    console.log(response)
                    if (response && response.data) setAccessToken(response.data.login.accessToken)
                    history.push("/")
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