import React from 'react'
import { Wrapper } from '../components/Wrapper'
import { Formik, Form } from 'formik'
import login from './login'
import { toErrorMap } from '../utils/toErrorMap'
import { Box, Flex, Button, Link } from '@chakra-ui/core'
import { InputField } from '../components/InputField'
import { createUrqlClient } from '../utils/createUrqlClient'
import { withUrqlClient } from 'next-urql'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useForgotPasswordMutation } from '../generated/graphql'

export const ForgotPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = React.useState(false)
    const router = useRouter()
    const [,forgotPassword] = useForgotPasswordMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        await forgotPassword(values)
                        setComplete(true)
                    }}>
                    {
                        ({ isSubmitting }) => {
                            return (
                                <>
                                    {
                                        complete ? <Box>We sent you an email</Box>
                                        : (
                                            <Form>
                                                <Box>
                                                    <InputField
                                                        name="email"
                                                        type="email"
                                                        placeholder="email"
                                                        label="Email" />
                                                </Box>
                                                <Flex
                                                    mt={4}>
                                                    <Button
                                                        mr={6}
                                                        isLoading={isSubmitting}
                                                        type="submit"
                                                        variantColor="teal">
                                                        Forgot Password
                                                    </Button>
                                                </Flex>
                                            </Form>
                                        )
                                    }
                                </>
                            )
                        }
                    }
                </Formik>
            </Wrapper>
        </>
    )
}

export default withUrqlClient(createUrqlClient)(ForgotPassword)
