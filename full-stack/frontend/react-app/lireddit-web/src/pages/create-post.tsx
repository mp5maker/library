import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'
import { Formik, Form } from 'formik'
import { Box, Flex, Button, Link } from '@chakra-ui/core'
import { InputField } from '../components/InputField'
import { useCreatePostMutation } from '../generated/graphql'
import { createUrqlClient } from '../utils/createUrqlClient'
import { withUrqlClient } from 'next-urql'

interface createPostProps {}

export const CreatePost: React.FC<createPostProps> = ({}) => {
    const router = useRouter()
    const [, createPost] = useCreatePostMutation()

    return (
        <>
            <Layout variant="small">
                <Formik
                    initialValues={{
                        title: '',
                        text: ''
                    }}
                    onSubmit={async (values) => {
                        const { error } = await createPost({ input: values })
                        if (!error) router.push("/")
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
                                            Create Post
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

export default withUrqlClient(createUrqlClient)(CreatePost)