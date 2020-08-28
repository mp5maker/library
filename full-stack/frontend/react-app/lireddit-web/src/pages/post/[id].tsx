import React from 'react'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../../utils/createUrqlClient'
import { useRouter } from 'next/router'
import { usePostQuery } from '../../generated/graphql'
import { Layout } from '../../components/Layout'

interface PostProps {}


export const Post: React.FC<PostProps> = ({}) => {
    const router = useRouter()
    const intId = typeof router?.query?.id === 'string' ? parseInt(router.query.id) : -1
    const [{ data, error, fetching }] = usePostQuery({
        pause: intId === -1,
        variables: {
            id: intId
        }
    })

    if (fetching) {
        return (
            <Layout>
                <div>Loading....</div>
            </Layout>
        )
    }

    if (error) {
        return (
            <Layout>
                <div> { error.message } </div>
            </Layout>
        )
    }

    return (
        <>
            <Layout>
                { data?.post?.text }
            </Layout>
        </>
    )
}


export default withUrqlClient(createUrqlClient, { ssr: true })(Post)