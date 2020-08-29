import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button, Link, Flex } from '@chakra-ui/core'
import { useRouter } from 'next/router'

import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import NextLink from 'next/link'

export const Login: React.FC<{}> = ({ }) => {
    const router = useRouter()
    const [login] = useLoginMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        usernameOrEmail: '',
                        password: ''
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await login({ variables: { ...values } })
                        if (response?.data?.login?.errors) {
                            setErrors(toErrorMap(response?.data?.login?.errors))
                        } else if (response.data?.login.user) {
                            if (typeof router.query.next === 'string') {
                                router.push(router.query.next)
                            } else router.push("/")
                        }
                    }}>
                    {
                        ({ isSubmitting }) => {
                            return (
                                <Form>
                                    <Box>
                                        <InputField
                                            name="usernameOrEmail"
                                            placeholder="username or email"
                                            label="Username Or Email" />
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <InputField
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            label="Password" />
                                    </Box>
                                    <Flex
                                        mt={4}>
                                        <Button
                                            mr={6}
                                            isLoading={isSubmitting}
                                            type="submit"
                                            variantColor="teal">
                                            Login
                                        </Button>
                                        <NextLink href="/forgot-password">
                                            <Link> Forgot Password ?</Link>
                                        </NextLink>
                                    </Flex>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Wrapper>
        </>
    )
}

export default Login