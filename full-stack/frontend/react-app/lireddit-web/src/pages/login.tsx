import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/core'
import { useRouter } from 'next/router'

import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { createUrqlClient } from '../utils/createUrqlClient'
import { withUrqlClient } from 'next-urql'

export const Login: React.FC<{}> = ({ }) => {
    const router = useRouter()
    const [_, login] = useLoginMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await login({ options: values})
                        if (response?.data?.login?.errors) {
                            setErrors(toErrorMap(response?.data?.login?.errors))
                        } else if (response.data?.login.user) {
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
                                            Login
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

export default withUrqlClient(createUrqlClient)(Login)