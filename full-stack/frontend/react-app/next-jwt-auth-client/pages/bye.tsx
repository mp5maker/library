import React from 'react'

import { useByeQuery } from '../generated/graphql'
import Layout from '../components/Layouts'

interface Props {}

export const Bye: React.FC<Props> = () => {
    const { data, loading, error } = useByeQuery({
        fetchPolicy: 'network-only'
    })

    if (loading) return (
        <Layout>
            <div>loading..</div>
        </Layout>
    )

    if (error) {
        console.log(error)
        return (
            <Layout>
                <div> error </div>
            </Layout>
        )
    }

    if (!data) return (
        <Layout>
            <div> No Data </div>
        </Layout>
    )

    return (
        <Layout>
            <div>
                { data.bye }
            </div>
        </Layout>
    )
}