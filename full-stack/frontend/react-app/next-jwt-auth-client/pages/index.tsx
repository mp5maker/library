import React from 'react'
import { useUsersQuery } from '../generated/graphql'
import Layout from '../components/Layouts'

interface Props{}

export const Home: React.FC<Props> = () => {
    const { data, loading } = useUsersQuery({ fetchPolicy: 'network-only' })

    if (loading) return (<div>Loading ...</div>)
    return (
        <Layout>
            <div>
                <div>
                    <h4>
                        Registered Users
                    </h4>
                    <ul>
                        {
                            data?.users.map((user, key) => {
                                return (
                                    <li key={key}>
                                        <div>
                                            {user.id} {user.email}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}