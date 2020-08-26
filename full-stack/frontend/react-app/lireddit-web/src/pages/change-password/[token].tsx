import React from 'react'
import { NextPage } from 'next'
import { Wrapper } from '../../components/Wrapper'
import { Formik, Form } from 'formik'
import { toErrorMap } from '../../utils/toErrorMap'
import { Box, Button } from '@chakra-ui/core'
import { InputField } from '../../components/InputField'
import { useRouter } from 'next/router'
import { useChangePasswordMutation } from '../../generated/graphql'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../../utils/createUrqlClient'

export const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
    const router = useRouter()
    const [,ChangePassword] = useChangePasswordMutation()
    const [tokenError, setTokenError] = React.useState('')

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        newPassword: '',
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await ChangePassword({
                            newPassword: values.newPassword,
                            token
                        })
                        if(response.data?.changePassword.errors) {
                            const errorMap = toErrorMap(response.data.changePassword.errors)
                            if ('token' in errorMap) setTokenError(errorMap.token)
                            setErrors(errorMap)
                        } else if (response.data?.changePassword.user) {
                            router.push("/")
                        }
                    }}>
                    {
                        ({ isSubmitting }) => {
                            return (
                                <Form>
                                    <Box
                                        mt={4}>
                                        <InputField
                                            type="password"
                                            name="newPassword"
                                            placeholder="new password"
                                            label="New Password" />
                                    </Box>
                                    <Box color="red">
                                        { tokenError }
                                    </Box>
                                    <Box
                                        mt={4}>
                                        <Button
                                            isLoading={isSubmitting}
                                            type="submit"
                                            variantColor="teal">
                                            Change Password
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

ChangePassword.getInitialProps = ({ query }) => {
    return {
        token: query.token as string
    }
}

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword)