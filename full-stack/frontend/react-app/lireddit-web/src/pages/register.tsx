import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/core'
import { useRouter } from 'next/router'

import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'

interface registerProps {}

export const Register: React.FC<registerProps> = ({ }) => {
    const router = useRouter()
    const [_, register] = useRegisterMutation()

    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await register(values)
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

export default Register