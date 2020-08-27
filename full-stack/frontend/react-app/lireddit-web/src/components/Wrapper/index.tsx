import React from 'react'
import { Box } from '@chakra-ui/core'
import { WrapperVariant } from '../Layout'

interface WrapperProps {
    variant?: WrapperVariant
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant = "regular" }) => {
    const isRegular = variant == 'regular'

    return (
        <>
            <Box
                mt="8"
                mx="auto"
                w="100%"
                maxW={isRegular ? `800px` : `300px`}>
                { children }
            </Box>
        </>
    )
}