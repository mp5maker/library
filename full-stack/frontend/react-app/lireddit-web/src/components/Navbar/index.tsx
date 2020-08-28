import React from 'react'
import { Box, Link, Flex, Button } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useMeQuery, useLogoutMutation } from '../../generated/graphql'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ data, fetching }] = useMeQuery()
    const [{ fetching: logoutFetching }, logout] = useLogoutMutation()

    let body = null
    if (fetching) {

    } else if(!data?.me) {
        body = (
            <>
                <NextLink href="/login">
                    <Link mr={2}>
                        Login
                    </Link>
                </NextLink>
                <NextLink href="/register">
                    <Link mr={2}>
                        Register
                    </Link>
                </NextLink>
            </>
        )
    } else {
        body = (
            <>
                <Flex>
                    <Box mr={2}>
                        { data?.me?.username }
                    </Box>
                    <Button
                        isLoading={logoutFetching}
                        onClick={() => logout()}
                        variant={`link`}>
                        Logout
                    </Button>
                </Flex>
            </>
        )
    }

    return (
        <>
            <Flex
                zIndex={1}
                top="0"
                position="sticky"
                p={4}
                bg="tan">
                <Box ml={"auto"}>
                    { body }
                </Box>
            </Flex>
        </>
    )
}