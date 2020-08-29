import { Box, Heading } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import { EditDeletePostButtons } from '../../components/EditDeletePostButtons'
import { Layout } from '../../components/Layout'
import { usePostQuery } from '../../generated/graphql'

interface PostProps {}


export const Post: React.FC<PostProps> = ({}) => {
    const router = useRouter()
    const intId = typeof router?.query?.id === 'string' ? parseInt(router.query.id) : -1
    const { data, error, loading } = usePostQuery({
        skip: intId === -1,
        variables: {
            id: intId
        }
    })

    if (loading) {
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

    if (!data?.post) {
        return (
            <Layout>
                <Box>
                    Could not find post
                </Box>
            </Layout>
        )
    }

    return (
        <>
            <Layout>
                <Heading>
                    { data?.post?.title }
                </Heading>
                <Box minHeight={`100px`}>
                    { data?.post?.text }
                </Box>
                <Box>
                    <EditDeletePostButtons item={data?.post} />
                </Box>
            </Layout>
        </>
    )
}


export default Post