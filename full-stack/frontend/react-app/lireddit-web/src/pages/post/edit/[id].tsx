import { Box, Button, Flex } from '@chakra-ui/core'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { Layout } from '../../../components/Layout'
import { useUpdatePostMutation } from '../../../generated/graphql'
import { useGetIntId } from '../../../utils/useGetIntId'
import { useGetPostFromUrl } from '../../../utils/useGetPostFromUrl'

export const EditPost: React.FC<{}> = ({}) => {
    const router = useRouter()
    const intId = useGetIntId()
    const { data, error, loading } = useGetPostFromUrl()
    const [updatePost] = useUpdatePostMutation()

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
                <div> {error.message} </div>
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

    const title = data?.post?.title
    const text = data?.post?.text

    return (
        <>
            <Layout variant="small">
                <Formik
                    initialValues={{
                        title,
                        text
                    }}
                    onSubmit={async (values) => {
                        await updatePost({ variables : {id: intId, ...values } })
                        router.back()
                    }}>
                    {
                        ({ isSubmitting }) => {
                            return (
                                <Form>
                                    <Box>
                                        <InputField
                                            name="title"
                                            placeholder="title"
                                            label="Title" />
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <InputField
                                            textarea
                                            name="text"
                                            placeholder="text..."
                                            label="Body" />
                                    </Box>
                                    <Flex
                                        mt={4}>
                                        <Button
                                            mr={6}
                                            isLoading={isSubmitting}
                                            type="submit"
                                            variantColor="teal">
                                            Update Post
                                    </Button>
                                    </Flex>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Layout>
        </>
    )
}

export default EditPost