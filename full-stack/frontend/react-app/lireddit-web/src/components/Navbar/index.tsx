import React from 'react'
import { Box, Link, Flex, Button, Heading, Text } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useMeQuery, useLogoutMutation } from '../../generated/graphql'
import { useRouter } from 'next/router'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const router = useRouter()
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
                <Flex align={`center`}>
                    <NextLink href="/create-post" >
                        <Button as={Link} mr="5">
                            <Box>
                                Create Post
                            </Box>
                        </Button>
                    </NextLink>
                    <Box mr={2}>
                        <Text>
                            { data?.me?.username }
                        </Text>
                    </Box>
                    <Button
                        isLoading={logoutFetching}
                        onClick={async () => {
                            await logout()
                            router.reload()
                        }}
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
                <Flex
                    flex={1}
                    align="center"
                    m={`auto`}
                    maxW={800}>
                    <NextLink href="/">
                        <Link>
                            <Heading>
                                LiReddit
                            </Heading>
                        </Link>
                    </NextLink>
                    <Box ml={"auto"}>
                        { body }
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}