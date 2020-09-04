import React from 'react'
import { useRegisterMutation } from '../generated/graphql'
import Layout from '../components/Layouts'
import { useRouter } from 'next/router'

export const Register: React.FC<{}> = ({}) => {
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState("")
    const [register] = useRegisterMutation()
    const router = useRouter()

    return (
        <Layout>
            <div>
                <form
                    onSubmit={async event => {
                        event.preventDefault()
                        const response = await register({
                            variables: {
                                email,
                                password
                            }
                        })
                        console.log(response)
                        router.push("/")
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
        </Layout>
    )
}

export default Register;