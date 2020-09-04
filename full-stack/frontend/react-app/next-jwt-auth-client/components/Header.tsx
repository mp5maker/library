import React from 'react'
import NextLink from 'next/link'
import { setAccessToken } from '../lib/accessToken'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'

export const Header: React.FC<{}> = () => {
    const { data } = useMeQuery({ fetchPolicy: 'network-only' })
    const [logout, { client }] = useLogoutMutation()

    return (
        <header>
            <div>
                <div>
                    <NextLink href="/">
                        Home
                    </NextLink>
                </div>
                <div>
                    <NextLink href="/bye">
                        Bye
                    </NextLink>
                </div>
                {
                    data && data.me ? (
                        <div>
                            <div>
                                Your are logged in as: { data.me.email}
                            </div>
                            <div>
                                <button onClick={async () => {
                                    await logout();
                                    setAccessToken("")
                                    await client!.resetStore();
                                }}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                                <div>
                                    <NextLink href="/register">
                                        Register
                                    </NextLink>
                                </div>
                                <div>
                                    <NextLink href="/login">
                                        Login
                                    </NextLink>
                                </div>
                        </>
                    )
                }
            </div>
        </header>
    )
}