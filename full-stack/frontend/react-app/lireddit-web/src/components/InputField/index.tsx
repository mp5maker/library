import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/core'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    label: string,
    placeholder: string,
    textarea?: boolean,
}

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, textarea = false, ...props}) => {
    const [field, { error }] = useField(props)

    let InputOrTextArea = Input
    if (textarea) InputOrTextArea = Textarea

    return (
        <>
            <FormControl
                isInvalid={!!error}>
                <FormLabel
                    htmlFor={field.name}>
                    { label }
                    <InputOrTextArea
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