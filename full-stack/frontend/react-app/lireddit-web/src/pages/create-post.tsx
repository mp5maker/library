import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout'
import { Formik, Form } from 'formik'
import { Box, Flex, Button } from '@chakra-ui/core'
import { InputField } from '../components/InputField'
import { useCreatePostMutation } from '../generated/graphql'
import { userIsAuth } from '../utils/userIsAuth'
import { withApollo } from '../utils/withApollo'

interface createPostProps {}

export const CreatePost: React.FC<createPostProps> = ({}) => {
    const router = useRouter()
    const [createPost] = useCreatePostMutation()
    userIsAuth()


    return (
        <>
            <Layout variant="small">
                <Formik
                    initialValues={{
                        title: '',
                        text: ''
                    }}
                    onSubmit={async (values) => {
                        const { errors } = await createPost({ variables: { input: values } })
                        if (!errors) router.push("/")
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

export default withApollo({ ssr: false })(CreatePost)