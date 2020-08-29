import { Box, Button } from '@chakra-ui/core'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { useRegisterMutation, MeDocument, MeQuery } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { withApollo } from '../utils/withApollo'


interface registerProps {}

export const Register: React.FC<registerProps> = ({ }) => {
    const router = useRouter()
    const [register] = useRegisterMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await register({
                            variables: { options: values },
                            update: (cache, { data }) => {
                                cache.writeQuery<MeQuery>({
                                    query: MeDocument,
                                    data: {
                                        __typename: "Query",
                                        me: data?.register.user,
                                    },
                                });
                            },
                        })
                        if (response?.data?.register?.errors) {
                            setErrors(toErrorMap(response?.data?.register?.errors))
                        } else if (response.data?.register.user) {
                            router.push("/")
                        }
                    }}>
                    {
                        ({ isSubmitting }) => {
                            return (
                                <Form>
                                    <Box>
                                        <InputField
                                            name="username"
                                            placeholder="username"
                                            label="Username" />
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <InputField
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            label="Email" />
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <InputField
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            label="Password" />
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <Button
                                            isLoading={isSubmitting}
                                            type="submit"
                                            variantColor="teal">
                                            Register
                                        </Button>
                                    </Box>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Wrapper>
        </>
    )
}

export default withApollo({ ssr: false })(Register)