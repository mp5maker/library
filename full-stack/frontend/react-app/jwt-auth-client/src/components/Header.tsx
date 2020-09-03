import React from 'react'
import { Link } from 'react-router-dom'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'
import { setAccessToken } from '../accessToken'

export const Header: React.FC<{}> = () => {
    const { data } = useMeQuery({ fetchPolicy: 'network-only' })
    const [logout, { client }] = useLogoutMutation()

    return (
        <header>
            <div>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/bye">
                        Bye
                    </Link>
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
                                    <Link to="/register">
                                        Register
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </div>
                        </>
                    )
                }
            </div>
        </header>
    )
}