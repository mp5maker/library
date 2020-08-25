import React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button } from '@chakra-ui/core'

import { Wrapper } from '../components/Wrapper'
import { InputField } from '../components/InputField'

interface registerProps {

}

export const Register: React.FC<registerProps> = ({ }) => {
    return (
        <>
            <Wrapper>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
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