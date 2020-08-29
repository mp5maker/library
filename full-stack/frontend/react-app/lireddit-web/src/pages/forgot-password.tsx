import { Box, Button, Flex } from '@chakra-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { InputField } from '../components/InputField'
import { Wrapper } from '../components/Wrapper'
import { useForgotPasswordMutation } from '../generated/graphql'
import { withApollo } from '../utils/withApollo'

export const ForgotPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = React.useState(false)
    const [forgotPassword] = useForgotPasswordMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        await forgotPassword({ variables: { ...values } })
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

export default withApollo({ ssr: false })(ForgotPassword)