import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    label: string,
    placeholder: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props}) => {
    const [field, { error }] = useField(props)

    return (
        <>
            <FormControl
                isInvalid={!!error}>
                <FormLabel
                    htmlFor={field.name}>
                    { label }
                    <Input
                        {...field }
                        {...props }
                        id={field.name}
                        placeholder={props.placeholder} />
                </FormLabel>
                {
                    error ? (
                        <FormErrorMessage>
                            { error }
                        </FormErrorMessage>
                    ) : ( <></> )
                }
            </FormControl>
        </>
    )
}