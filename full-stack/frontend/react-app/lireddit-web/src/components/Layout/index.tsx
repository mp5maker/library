import React from 'react'
import { NavBar } from '../Navbar'
import { Wrapper } from '../Wrapper'

export type WrapperVariant = "small" | "regular"

interface LayoutProps {
    variant?: WrapperVariant
}

export const Layout: React.FC<LayoutProps> = ({
    variant,
    children
}) => {
    return (
        <>
            <NavBar />
            <Wrapper variant={variant}>
                { children }
            </Wrapper>
        </>
    )
}