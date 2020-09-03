import React from 'react'
import { Routes } from './Routes'
import { setAccessToken } from './accessToken'

interface Props {}


export const App: React.FC<Props> = () => {
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('http://localhost:4000/refresh-token', { credentials: "include", method: "POST" })
            .then((response) => response.json())
            .then((data) => {
                if (data && data.accessToken) setAccessToken(data.accessToken)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div>
                Loading ...
            </div>
        )
    }

    return (
        <Routes />
    )
}