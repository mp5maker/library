import React from 'react'
import { NextPage } from 'next'
import { Wrapper } from '../../components/Wrapper'
import { Formik, Form } from 'formik'
import { toErrorMap } from '../../utils/toErrorMap'
import { Box, Button, Link, Flex } from '@chakra-ui/core'
import { InputField } from '../../components/InputField'
import { useRouter } from 'next/router'
import { useChangePasswordMutation } from '../../generated/graphql'
import NextLink from 'next/link'
import { withApollo } from '../../utils/withApollo'

export const ChangePassword: NextPage = () => {
    const router = useRouter()
    const [changePassword] = useChangePasswordMutation()
    const [tokenError, setTokenError] = React.useState('')

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        newPassword: '',
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await changePassword({
                            variables: {
                                newPassword: values.newPassword,
                                token: typeof router.query.token == 'string' ? router.query.token : ''
                            }
                        })
                        if(response.data?.changePassword.errors) {
                            const errorMap = toErrorMap(response.data.changePassword.errors)
                            if ('token' in errorMap) setTokenError(errorMap.token)
                            setErrors(errorMap)
                        } else if (response.data?.changePassword.user) router.push("/")
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
                                    {
                                        tokenError && (
                                            <Flex>
                                                <Box mr={2} style={{ color: `red` }}>
                                                    { tokenError }
                                                </Box>
                                                <NextLink href="/forgot-password">
                                                    <Link> Click here to get a new one </Link>
                                                </NextLink>
                                            </Flex>

                                        )
                                    }
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

export default withApollo({ ssr: false })(ChangePassword)