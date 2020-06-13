import React, { useState, useEffect } from "react"
import socketIO from 'socket.io-client'
import SERVER from '../socket'

export const Socket = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        const socket = socketIO(SERVER)

        /* Information */
        socket.on("information", (data) => setMessage(data))
        return () => {}
    }, [])

    return (
        <React.Fragment>
            { message }
        </React.Fragment>
    )

}